import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreModel } from 'src/app/model/score-model';

@Component({
  selector: 'app-score-liste',
  templateUrl: './score-liste.component.html',
  styleUrls: ['./score-liste.component.css']
})
export class ScoreListeComponent implements OnInit {

  scores!: Array<ScoreModel>;
  selectedScore!: ScoreModel;

  constructor(route: ActivatedRoute, public router: Router) {
    this.scores = route.snapshot.data['scores'];
  }

  ngOnInit(): void {
  }

  openDetails() {
    this.router.navigate(['score/details'], { state: this.selectedScore });
  }

}
