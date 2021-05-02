# ng-time-from-pipe

[![npm](https://img.shields.io/npm/dt/ng-time-from-pipe)](https://www.npmjs.com/package/ng-time-from-pipe)
[![npm](https://img.shields.io/npm/v/ng-time-from-pipe)](https://www.npmjs.com/package/ng-time-from-pipe)
[![GitHub issues](https://img.shields.io/github/issues/mrharrisonbarker/ng-time-from-pipe)](https://github.com/MrHarrisonBarker/ng-time-from-pipe/issues)
[![NPM](https://img.shields.io/npm/l/ng-time-from-pipe)](https://www.npmjs.com/package/ng-time-from-pipe)
[![Build&Publish](https://github.com/MrHarrisonBarker/ng-time-from-pipe/actions/workflows/main.yml/badge.svg)](https://github.com/MrHarrisonBarker/ng-time-from-pipe/actions/workflows/main.yml)

A simple pipe to display the time passed from the input date. Also includes a `<time-from>` component with hover switching effect (switch between time from and raw date format).

Updates as time passes.

### Install

``` npm install ng-time-from-pipe ```

### Usage

You can import in the @NgModule.

```typescript
import { TimeFromPipeModule } from "ng-time-from-pipe";
```

then add to imports array. 

```typescript
@NgModule( { 
  declarations: [ ... ],
  imports: [ ..., TimeFromPipeModule, ... ]
})
```

you can choose between the time from pipe and the time from component (time from component has hover effect).

```html
<time-from [value]="date"></time-from>
```

| Attribute | Type                       |
| --------- | -------------------------- |
| value     | Input date toe be formated |

```html
<span>{{ date | timeFrom  }}</span>
```

| Attribute | Type                           |
| --------- | ------------------------------ |
| value     | Any. Date to be formated       |
| isOn      | Boolean. Turns on and off pipe |
