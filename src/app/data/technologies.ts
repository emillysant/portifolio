import { OtherTechnology, Technology } from "../models/interfaces";

export const technologies: Technology[] = [
  { name: 'Angular', time: '+1', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" },
  { name: 'React', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" },
  { name: 'Ionic', time: '+1', color: 'none', src: "https://ionicframework.com/img/meta/logo.png" },
  { name: 'HTML', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" },
  { name: 'CSS', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" },
  { name: 'Typescript', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" },
];


export const otherTechnologies: OtherTechnology[] = [
  {
    name: "visual-studio-code",
    src: "https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC"
  },
  {
    name: "trello",
    src: "https://img.shields.io/badge/-Trello-333333?style=flat&logo=trello&logoColor=007ACC"
  },
  {
    name: "git",
    src: "https://img.shields.io/badge/-Git-333333?style=flat&logo=git"
  },
  {
    name: "github",
    src: "https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github"
  },
  {
    name: "postman",
    src: "https://img.shields.io/badge/-Postman-333333?style=flat&logo=postman"
  }
]
