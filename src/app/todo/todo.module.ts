import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoLayoutComponent } from './layouts/todo-layout/todo-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TodoLayoutComponent }]),
  ],
})
export class TodoModule { }
