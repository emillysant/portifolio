import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsData = projects

  constructor() { }

  ngOnInit(): void {
  }

}
