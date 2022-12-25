import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import TodoModel from '../Todomodel';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todom?: TodoModel[];
  constructor(private todoserive: TodoService) { }

  ngOnInit(): void {
    this.todoserive.getTodoData().subscribe((response) => {
      if (response.flag == '1') { 
        console.log(response.todo_list);
        this.todom = response.todo_list;//Assign Data to Model
        console.log(this.todom); 
      } else {
        console.warn("Error in API Calling");
      }
    })
  }
}
