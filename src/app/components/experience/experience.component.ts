import { Component, OnInit } from '@angular/core';
import { experiences } from 'src/app/data/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencesData = experiences

  constructor() { }

  ngOnInit(): void {
  }

}
