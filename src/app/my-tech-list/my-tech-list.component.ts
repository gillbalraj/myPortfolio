import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-my-tech-list',
  templateUrl: './my-tech-list.component.html',
  styleUrls: ['./my-tech-list.component.scss']
})
export class MyTechListComponent implements OnInit {

  skills = SKILLS;
  constructor() { }

  ngOnInit() {
  }

}
