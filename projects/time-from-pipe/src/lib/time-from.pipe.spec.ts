import { TimeFromPipe } from './time-from.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { ChangeDetectorRef, NgZone } from '@angular/core';
// import {it} from "@angular/core/testing/src/testing_internal";

describe('TimeFromPipe', () => {

  // // let pipe: TimeFromPipe;
  // let fixture;
  // let pipe;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [ChangeDetectorRef, NgZone]
  //   });
  //   fixture = TestBed.createComponent(TimeFromPipe);
  //   // pipe = new TimeFromPipe('en-GB');
  // });

  // it('create an instance', inject([ChangeDetectorRef,NgZone], (cdRef: ChangeDetectorRef,ngZone: NgZone) => {
  //   const pipe = new TimeFromPipe('en-GB',cdRef,ngZone);
  //   expect(pipe).toBeTruthy();
  // }));

  // it('should correctly determine time passed in seconds', () => {

  //   let currentTime = new Date();
  //   let sixtyMinutesAgo = new Date(currentTime.getTime() - (20*1000));

  //   expect(pipe.transform(sixtyMinutesAgo)).toBe('20 seconds ago');
  // });

  // it('should correctly determine time passed in minutes', () => {

  //   let currentTime = new Date();
  //   let sixtyMinutesAgo = new Date(currentTime.getTime() - (60*60*1000));

  //   expect(pipe.transform(sixtyMinutesAgo)).toBe('60 minutes ago');
  // });

  // it('should correctly determine time passed in hours', () => {

  //   let currentTime = new Date();
  //   let sixtyMinutesAgo = new Date(currentTime.getTime() - (2.2*60*60*1000));

  //   expect(pipe.transform(sixtyMinutesAgo)).toBe('2 hours ago');
  // });

  // it('should correctly determine time passed in minutes', () => {

  //   let currentTime = new Date();
  //   let sixtyMinutesAgo = new Date(currentTime.getTime() - (25*60*60*1000));

  //   expect(pipe.transform(sixtyMinutesAgo)).toBe('1 days ago');
  // });
});
