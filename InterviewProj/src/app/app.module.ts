import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; // For mat-select
import { MatDatepickerModule } from '@angular/material/datepicker'; // For mat-datepicker
import { MatNativeDateModule } from '@angular/material/core'; // For native date adapter (used with mat-datepicker)

import { AppComponent } from './app.component';
import { QuestionManagerComponent } from './question-manager/question-manager.component';
import { FetchQuestionsComponent } from './fetch-questions/fetch-questions.component';

// Define the routes
const routes: Routes = [
  { path: '', component: QuestionManagerComponent }, // Set QuestionManager as the default route (home screen)
  { path: 'fetch-questions', component: FetchQuestionsComponent }, 
  // other routes can go here
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagerComponent,
    FetchQuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule, // For [(ngModel)]
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule, // Add this for mat-select
    MatDatepickerModule, // Add this for mat-datepicker
    MatNativeDateModule // Add this for date functionality in mat-datepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
