import { ChangeDetectorRef, Inject, LOCALE_ID, NgZone, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe( {
  name: 'timeFrom',
  pure: false
} )
export class TimeFromPipe implements PipeTransform
{

  private displayText;
  private previousText = '-1';
  private currentTimer: number | null;

  constructor(@Inject(LOCALE_ID) private locale: string, private cdRef: ChangeDetectorRef, private ngZone: NgZone) 
  {
  }

  transform( value: any, isOn?: boolean ): string
  {

    if (isOn) {
      return new DatePipe(this.locale).transform(value,'medium');
    }

    if (this.previousText != this.formatText( value )) {

      this.previousText = this.displayText;

      this.removeTimer();

      this.timer(value);

      this.displayText = this.formatText( value );

    } else {
      this.timer(value);
      // console.log('else hit');
    }

    return this.displayText;
  }

  private timeDifference (value): number
  {
    return ( new Date().getTime() - value ) / 1000;
  }

  private timer(value: any) {

    if (this.currentTimer) {
      return;
    }

    this.currentTimer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {

          // console.log('timmer run', this.displayText, this.timeDifference(value));

          this.currentTimer = null;
          this.ngZone.run(() => this.cdRef.markForCheck());

        }, this.calculateTimeout(value));
      } else {
        return null;
      }
    });
  }

  private removeTimer() {
    if (this.currentTimer) {
      window.clearTimeout(this.currentTimer);
      this.currentTimer = null;
    }
  }

  private calculateTimeout(value) {
    let difference = this.timeDifference(value);
    if (difference < 60) {
      return 1000;
    } else if (difference < 3600) {
      return 30000;
    } else if (difference < 86400) {
      return 3600000;
    } else {
      return null;
    }
  }

  private formatText(value: number) {
    let timeFrom: number = this.timeDifference(value);

    if ( timeFrom <= 60 )
    {
      return ( `${ Math.floor( timeFrom ) } seconds ago` );
    } else if ( timeFrom <= 3600 )
    {
      return ( `${ Math.floor( timeFrom / 60 ) } minutes ago` );
    } else if ( timeFrom <= 86400 )
    {
      return ( `${ Math.floor( ( timeFrom / 60 ) / 60 ) } hours ago` );
    } else
    {
      return ( `${ Math.floor( ( ( timeFrom / 60 ) / 60 ) / 24 ) } days ago` );
    }
  }

}
