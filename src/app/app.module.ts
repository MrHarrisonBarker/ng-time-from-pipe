import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeFromPipeModule } from 'projects/time-from-pipe/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TimeFromPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
