import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreModel } from 'src/app/model/score-model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.css']
})
export class ScoreDetailsComponent implements OnInit {

  score!: ScoreModel

  constructor(route: ActivatedRoute, private location: Location, public router: Router) {
  }


  ngOnInit(): void {
    this.score=history.state;
  }

  getColor() {
    let color
    if (this.score.score >= 80) {
      color = "score-green"
    } else if (this.score.score >= 50 && this.score.score < 80) {
      color = "score-orange"
    } else {
      color = "score-red"
    }
    return color;
  }

  back(){
     this.router.navigate(["score"])
  }

}
