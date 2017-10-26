import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { SummaryPipe } from './summary.pipe';

const appRoutes: Routes = [
  { path: 'rating', component: RatingComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' } // the place to go when the path in the URL is empty
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RatingComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }// <-- debugging purposes only
    )
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
