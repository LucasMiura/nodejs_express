// Importando o Express na nossa aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

// ROTA PERFIL
// :nome é um parâmetro obrigatório
// :nome: é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  // Coletando o parâmetro e guardando na variável
  const nome = req.params.nome;
  // Verificando se o parâmetro nome existe
  if (nome) {
    //Se o nome == true
    res.send(`Olá, ${nome}! Seja bem-vindo!`);
  } else {
    res.render("perfil");
  }
});

// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  // Verificando se playlist == true e video == undefined
  if (playlist && video == undefined) {
    res.send(`<h2>Você está na playlist de ${playlist}.</h2>`);
  }
  // Verificando se os dois parâmetros são = true
  if (playlist && video) {
    res.send(`<h2>Você está na playlist de ${playlist}</h2><br>
      Reproduzindo o vídeo ${video}...`);

    // Se não for informado nenhum parâmetro
  } else {
    res.render("videos");
    
  }
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    // Enviando a variável para a página
    // Será chamado na página (primeira variável)
    produto: produto, // Variável que está na index (segunda variável)
    listaProdutos : listaProdutos
    // Na página produtos.ejs haverá uma testagem de condição
  });
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
