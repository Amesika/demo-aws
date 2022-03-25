import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SujetsComponent } from './sujets.component';
import { SUJETS_ROUTES } from './sujets.routes';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import { SujetService } from '../service/sujet.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { SujetFormComponent } from './sujet-form/sujet-form.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PanelModule} from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [
    SujetsComponent,
    SujetFormComponent,    
  ],
  imports: [
    TableModule,
    RouterModule.forChild(SUJETS_ROUTES),
    CardModule,
    HttpClientModule,
    MenuModule,
    DropdownModule,
    ButtonModule ,
    DialogModule,
    InputTextModule,
    PanelModule,
    InputTextareaModule,
    CommonModule,
    TooltipModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers:[
    SujetService,
    MessageService,
    ConfirmationService
  ]
})
export class SujetsModule { }
