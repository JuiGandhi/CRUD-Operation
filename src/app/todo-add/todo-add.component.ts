import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  myForm!: FormGroup;
  mydata: any;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      todo_title: ['', Validators.required],
      todo_details: ['', Validators.required],
    });
  }

  SaveData(mydata: any) {
      
      console.log(mydata);
    }
 
  ngOnInit(): void {
  }
}
