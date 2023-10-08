import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(
    private student : StudentService
  ){}

  data : any[] = [];
  
  value : any = {
    id : null,
    name : '',
    email : ''
  };

  ngOnInit(): void {
    this.index();
  }

  index() {
    return this.student.index().subscribe(
      response => {
        this.data = response;
        console.log(response);
      }
    );

  }

  store() {
    console.log("value : ",this.value);
    
    return this.student.store(this.value).subscribe(
      response => {
        this.data.push = response;
      }
    );

  }

  edit(value :any){
    this.value = value;
  }

}
