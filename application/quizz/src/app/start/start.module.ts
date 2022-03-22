import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartDashComponent } from './start-dash/start-dash.component';
import { START_ROUTES } from './start.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StartDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(START_ROUTES),
  ]
})
export class StartModule { }
