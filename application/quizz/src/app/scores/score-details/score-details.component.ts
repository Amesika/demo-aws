import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreModel } from 'src/app/model/score-model';

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.css']
})
export class ScoreDetailsComponent implements OnInit {

  score!:ScoreModel

  constructor(route: ActivatedRoute,public router: Router) {
    this.score = route.snapshot.data['score'];
  }

  ngOnInit(): void {
  }

}
