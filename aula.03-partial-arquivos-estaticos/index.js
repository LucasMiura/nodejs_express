// Importando o Express na nossa aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

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
  res.render("perfil", {
    nome: nome,
  });
});


// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", {
    playlist: playlist,
    video: video,
  });
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    // Enviando a variável para a página
    // Será chamado na página (primeira variável)
    produto: produto, // Variável que está na index (segunda variável)
    listaProdutos: listaProdutos,
    // Na página produtos.ejs haverá uma testagem de condição
  });
});

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  // ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3800 },
  ];
  res.render("pedidos", {
    // Enviando o array de objetos para a página
    pedidos: pedidos,
  });
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
