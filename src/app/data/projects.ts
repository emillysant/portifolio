import { Project } from "../models/interfaces";

export const projects: Project[] = [
  {
    title: "EstanteDeLivros",
    framework: "Angular 14" ,
    description: "Aplicação Web para consulta da API do google/books. Possui um pipe customizado para filtrar as pesquisas e melhorar o desempenho da aplicação usando o switchMap do rxjs.",
    code: "https://github.com/emillysant/EstanteDeLivros",
    site: ""
  },
  {
    title: "EstatisticasFutebol",
    framework: "Angular 12",
    description: "Aplicação Web para consultas de uma API pública de estatísticas de jogos de futebol pelo mundo.",
    code: "https://github.com/emillysant/EstatisticasFutebol",
    site: ""
  },
  {
    title: "gatitoBook",
    framework: "Angular 11 + Node.js",
    description: "Projeto feito em Angular e Node para cadastro de comentarios e imagens de gatos. A API conta com serviço de autenticação que faz comunicação com banco de dados Sqlite3 e express.",
    code: "https://github.com/emillysant/gatitoBook",
    site:""
  },
  {
    title: "reactjs-junior-challenge",
    framework: "React 18",
    description: "Projeto em React para gerenciamentos de clientes. O projeto possui um CRUD usando o JSON-Serve que funciona como uma API fake",
    code: "",
    site:""
  }

]
