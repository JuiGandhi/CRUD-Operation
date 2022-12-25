import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
const routes: Routes = [
  {
    path:'todo',
    component : TodoViewComponent
  },
  {
    path:'todo/add',
    component : TodoAddComponent
  },
  {
    path:'todo/edit/:id',
    component : TodoEditComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
