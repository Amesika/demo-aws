import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreListeComponent } from './score-liste/score-liste.component';
import { ScoreDashComponent } from './score-dash/score-dash.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterModule } from '@angular/router';
import { SCORES_ROUTES } from './scores.routes';
import { ScoresService } from './services/scores.service';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ScoreDetailsComponent } from './score-details/score-details.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    ScoreDashComponent,
    ScoreListeComponent,
    ScoreDetailsComponent
  ],
  imports: [
    HttpClientModule,
    TableModule,
    TabMenuModule,
    CommonModule,
    ButtonModule,
    PanelModule,
    RouterModule.forChild(SCORES_ROUTES),
  ],
  providers: [
    ScoresService,
    MessageService,
  ]
})
export class ScoresModule { }
