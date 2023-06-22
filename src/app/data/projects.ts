import { Project } from "../models/interfaces";

export const projects: Project[] = [
  {
    title: "buscante",
    framework: "Angular 14" ,
    description: "Aplicação Web para consulta da API do google/books. Possui um pipe customizado para filtrar as pesquisas e melhorar o desempenho da aplicação usando o switchMap do rxjs.",
    code: "https://github.com/emillysant/EstanteDeLivros",
    site: "https://buscante.onrender.com"
  },
  {
    title: "estatisticas-futebol",
    framework: "Angular 12",
    description: "Aplicação Web para consultas de uma API pública de estatísticas de jogos de futebol pelo mundo.",
    code: "https://github.com/emillysant/EstatisticasFutebol",
    site: "https://estatisticas-futebol.onrender.com"
  },
  {
    title: "gatito-Book",
    framework: "Angular 11 + Node.js",
    description: "Projeto full-stack feito em Angular e Node para cadastro de comentarios e imagens de gatos. A API conta com serviço de autenticação que faz comunicação com banco de dados Sqlite3 e express.",
    code: "https://github.com/emillysant/gatitoBook",
    site:""
  },
  {
    title: "x-sistems",
    framework: "React 18",
    description: "Projeto em React para gerenciamentos de clientes. O projeto possui um CRUD usando o JSON-Serve que funciona como uma API fake",
    code: "https://github.com/emillysant/reactjs-junior-challenge",
    site:""
  },
  {
    title: "lab-commerce",
    framework: "React 16",
    description: "Projeto em Grupo do curso de Full-stack da Labenu. A aplicação web é um ecommerce para venda de naves espaciais",
    code: "https://github.com/future4code/cruz-labe-commerce4",
    site:"https://spacelab.surge.sh/"
  },
  {
    title: "byte-bank",
    framework: "Angular 12",
    description: "Aplicação web para realização de transferências bancarias",
    code: "https://github.com/emillysant/bytebank",
    site:"https://bytebank.onrender.com"
  },

]
