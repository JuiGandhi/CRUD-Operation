import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import TodoModel from './Todomodel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //BaseURL
  uri = "https://akashsir.in/myapi/crud/";

  constructor( private http:HttpClient ) { }

  getTodoData():Observable<any>{
    return this.http.get<any>(`${this.uri}/todo-list-api.php`);
  }

}
