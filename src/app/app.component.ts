import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-from-workspace';

  stringTime = 'Sun, 01 Dec 2019 17:23:12 GMT'
  
  currentTime = new Date;

  seconds = new Date(this.currentTime.getTime() - (20*1000));
  minutes = new Date(this.currentTime.getTime() - (30*60*1000));
  hours = new Date(this.currentTime.getTime() - (2.2*60*60*1000));
  days = new Date(this.currentTime.getTime() - (25*60*60*1000));
}
