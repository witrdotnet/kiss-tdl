import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChecklistModule } from 'angular-checklist';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChecklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
