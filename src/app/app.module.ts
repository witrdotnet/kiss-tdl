import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChecklistModule } from 'angular-checklist';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TdlService } from './tdl.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChecklistModule,
    HttpClientModule
  ],
  providers: [
    TdlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
