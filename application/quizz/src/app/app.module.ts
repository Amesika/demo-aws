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
    RouterModule.forRoot(QUIZZ_ROUTES), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
