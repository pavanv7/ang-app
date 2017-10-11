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
    <button class="btn btn-success" [class.active]="isActive">save</button>
    <button class="btn btn-danger" [style.background-color]="isBkSet ? 'green' : 'black'">save</button>
    <button class="btn btn-primary" (click)="onSave($event)">save</button>
  `
})

export class CoursesComponent {
  title = 'List of courses';
  courses;

  isActive = true;
  isBkSet = false;
  onSave($event) {
    console.log(' Button clicked ', $event);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
