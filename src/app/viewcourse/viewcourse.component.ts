import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putData()}
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.courseData=data
      }
    )
  }
  courseData:any=[]

  ngOnInit(): void {
  }

}
