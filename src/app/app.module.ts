import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
const course:Routes=[
  {
    path:"",component:AddcourseComponent
  },
  {
    path:"add",component:ViewcourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(course),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
