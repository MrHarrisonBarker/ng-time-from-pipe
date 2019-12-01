import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-from',
  template: '<p (mouseenter)="hover = true" style="cursor:pointer" (mouseleave)="hover = false" class="time-from">{{value | timeFrom: hover}}</p>',
})
export class TimeFromComponent {
    hover: boolean;
    @Input()value: any;
}
