import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: `app-courses`,
  template: `
    <h2>{{ title }}</h2>
    <ul *ngFor="let course of courses">
      <li>{{ course.id }}</li>
      <li>{{ course.name }}</li>
    </ul>
    <h3>{{isActive}}</h3>
    <input [(ngModel)]="isActive" (keyup.enter)="changeActive()"/>
    <input *ngIf = 'isActive' [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <button class="btn btn-success" [class.active]="isActive">button1</button>
    <button class="btn btn-danger" [style.background-color]="isBkSet ? 'green' : 'black'">button2</button>
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" (click)="onSave($event)">button3</button>
    </div>
    <p>{{ text | summary:10}}</p>
  `
})

export class CoursesComponent {
  title = 'List of courses';
  courses;

  isActive = true;
  isBkSet = false;
  email = 'pavankumar@eckomantra.com';
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque, aliquam
          laborum, odit tempore dolor quae, ab esse non ipsa perferendis
          totam neque quis dolores! Quisquam praesentium animi architecto voluptatum?`;
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
  changeActive() {
    if ( this.isActive === false ) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
