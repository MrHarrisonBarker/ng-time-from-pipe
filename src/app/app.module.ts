import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeFromPipe, TimeFromComponent } from 'projects/time-from-pipe/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    TimeFromPipe,
    TimeFromComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
