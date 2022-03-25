import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ScoreModel } from 'src/app/model/score-model';
import { ScoresService } from '../services/scores.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreResolver implements Resolve<ScoreModel> {

  constructor(private scoresService: ScoresService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ScoreModel> {
    return this.scoresService.getScore(0);
  }
}
