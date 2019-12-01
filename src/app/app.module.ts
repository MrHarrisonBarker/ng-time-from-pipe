import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeFromPipe } from 'projects/time-from-pipe/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TimeFromPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
