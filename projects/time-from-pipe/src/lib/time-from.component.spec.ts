import {
  TimeFromComponent
} from "./time-from.component";
import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';
import { TimeFromPipe } from './time-from.pipe';

describe('TimeFromComponent', () => {
  let component: TimeFromComponent;
  let fixture: ComponentFixture < TimeFromComponent > ;
  let el: HTMLElement; 

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [TimeFromComponent, TimeFromPipe]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFromComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    component.value = new Date();
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display corret number of days', () => {
    component.value = new Date(0);
    fixture.detectChanges();

    let numOfDays = Math.floor( ( ( ( ( new Date().getTime() - new Date(0).getTime() ) / 1000) / 60 ) / 60 ) / 24 );

    const content = el.querySelector('p');

    expect(content.innerHTML).toContain(`${numOfDays} days ago`);
  });
});
