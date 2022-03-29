import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartDashComponent } from './start-dash/start-dash.component';
import { START_ROUTES } from './start.routes';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { StartStepComponent } from './start-step/start-step.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    StartDashComponent,
    StartStepComponent
  ],
  imports: [
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(START_ROUTES),
  ]
})
export class StartModule { }
