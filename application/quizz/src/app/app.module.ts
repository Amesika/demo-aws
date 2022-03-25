import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { QUIZZ_ROUTES } from './routes/app.routes';
import { DevComponent } from './dev/dev.component';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DevComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MenuModule,
    MenubarModule,
    TabViewModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    RouterModule.forRoot(QUIZZ_ROUTES), 
  ],
  providers: [MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
