import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from 'src/app/model/question-model';
import { SujetModel } from 'src/app/model/sujet-model';
import { Location } from '@angular/common'
import { SujetService } from 'src/app/service/sujet.service';
import { ScoreModel } from 'src/app/model/score-model';
import { QuestionReponseModel } from 'src/app/model/question-reponse-model copy';

@Component({
  selector: 'app-start-step',
  templateUrl: './start-step.component.html',
  styleUrls: ['./start-step.component.css'],
  providers: [SujetService]
})
export class StartStepComponent implements OnInit {

  sujet!: SujetModel;

  score!: ScoreModel;

  question!: QuestionModel;
  questionIndex!: number;
  questionSize!: number;

  selectedReponse: any = null;

  constructor(private location: Location, public router: Router, private sujetSrv: SujetService) {

  }

  ngOnInit(): void {
    //this.sujet = history.state;
    this.questionIndex = 0;
    this.sujetSrv.getSujet(0).subscribe((data) => {
      this.sujet = data;
      this.questionSize = this.sujet?.questions?.length
      if (this.sujet?.questions?.length)
        this.question = this.sujet.questions[this.questionIndex];

      // Initialisation du score
      this.score = {} as ScoreModel
      this.score.sujet = this.sujet;
      this.score.questionReponses = [];
    });
  }

  prev() {
    this.questionIndex--;
    this.question = this.sujet.questions[this.questionIndex];
  }

  next() {
    this.questionIndex++;
    this.question = this.sujet.questions[this.questionIndex];
  }

  terminet() {
    this.router.navigate(['score/details'], { state: this.score });
  }

  addResponse() {
    let questionReponse: QuestionReponseModel;
    let index:number;
    questionReponse = {} as QuestionReponseModel;
    questionReponse.question = this.question;
    questionReponse.reponse = this.selectedReponse;

    index = this.score.questionReponses.findIndex((qr) => qr.question.id == this.question.id)
    
    if(index == -1){
      this.score.questionReponses.push(questionReponse);
    }else{
      this.score.questionReponses.splice(index, 1, questionReponse);
    }
    console.log(this.score)
  }
}
