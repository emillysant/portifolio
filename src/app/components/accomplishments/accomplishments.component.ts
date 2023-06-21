import { Component, OnInit } from '@angular/core';
import { accomplishments } from './../../data/accomplishments';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  accomplishmentsData = accomplishments;
  constructor() { }

  ngOnInit(): void {
  }

}
