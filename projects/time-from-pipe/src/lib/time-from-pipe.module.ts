import { NgModule } from '@angular/core';
import { TimeFromPipe } from "./time-from.pipe";
import { TimeFromComponent } from './time-from.component';



@NgModule({
  declarations: [TimeFromPipe, TimeFromComponent],
  exports: [TimeFromPipe]
})
export class TimeFromPipeModule { }
