import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: `app-courses`,
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <button class="btn btn-success" [class.active]="isActive">save</button>
    <button class="btn btn-danger" [style.background-color]="isBkSet ? 'green' : 'black'">save</button>
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" (click)="onSave($event)">save</button>
    </div>
  `
})

export class CoursesComponent {
  title = 'List of courses';
  courses;

  isActive = true;
  isBkSet = false;
  email = 'pavankumar@eckomantra.com';
  onKeyUp() {
    console.log(this.email);
  }
  onDivClicked() {
    console.log('Div Clicked');
  }
  onSave($event) {
    $event.stopPropagation(); // When button click both button and div click events were execute to stop this use stopProgation()
    console.log(' Button clicked ', $event);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
