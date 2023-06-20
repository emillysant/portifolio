import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    technologies: Technology[] = [
    {name: 'Angular', time: '+1', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"},
    {name: 'React', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" },
    {name: 'Ionic', time: '+1', color: 'none',  src: "https://ionicframework.com/img/meta/logo.png"},
    {name: 'HTML', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"},
    {name: 'CSS', time: '+2', color: 'none', src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"},
    {name: 'Typescript', time: '+2', color: 'none', src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"},
  ];

}
