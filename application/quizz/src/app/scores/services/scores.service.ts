import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ScoreModel } from 'src/app/model/score-model';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

  getScores() : Observable<Array<ScoreModel>> {
    this.messageService.add({severity:"success", summary: "Récupération des scores", detail: JSON.stringify("Récupération des scores")});
    return this.http.get<Array<ScoreModel>>('assets/tmp/scores.json');
  }

  getScore(scoreId:number) : Observable<ScoreModel> {
    this.messageService.add({severity:"success", summary: "Récupération d'un score", detail: JSON.stringify("Récupération d'un score")});
    return this.http.get<ScoreModel>('assets/tmp/score.json');
  }
}
