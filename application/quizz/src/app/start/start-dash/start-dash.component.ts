import { Component, OnInit } from '@angular/core';
import { SujetModel } from 'src/app/model/sujet-model';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-dash',
  templateUrl: './start-dash.component.html',
  styleUrls: ['./start-dash.component.css']
})
export class StartDashComponent implements OnInit {

  sujet!: SujetModel;

  constructor(private location: Location, public router: Router) { }

  ngOnInit(): void {
    this.sujet = history.state;
  }

  back() {
    this.location.back();
  }

  launchStep() {
    this.router.navigate(['start/step'], { state: this.sujet });
  }

}
