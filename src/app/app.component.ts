import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uname = 'pavan';
  post = {
    isSelected: true
  };
  onFavoriteChanged() {
    console.log('Favorite changed');
  }
}
