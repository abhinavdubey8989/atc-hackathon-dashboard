import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { TodoComponent } from './modules/todo/todo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  MatExpansionModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule
} from '@angular/material';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
// import { PostsComponent } from './modules/posts/posts.component';







@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    // DashboardComponent,
    // PostsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
