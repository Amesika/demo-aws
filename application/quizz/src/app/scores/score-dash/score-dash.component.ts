import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-score-dash',
  templateUrl: './score-dash.component.html',
  styleUrls: ['./score-dash.component.css']
})
export class ScoreDashComponent implements OnInit {

  subMenus!: MenuItem[];
  activeItem!: MenuItem;

  constructor() { }

  ngOnInit() {
    this.subMenus = [
      { label: 'Mon Score',  routerLink: '/score/mon-score', },
      { label: 'Tous les scores',  routerLink: '/score/all', },
    ];

    console.log(new Date());
    console.log(new Date().toString());
    console.log(new Date().toDateString());
  }
}
