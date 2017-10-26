import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  // template: 'Rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-selected') isSelected: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
}
