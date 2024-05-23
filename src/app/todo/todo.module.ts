import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoLayoutComponent } from './layouts/todo-layout/todo-layout.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';
import { TodoEffect } from './store/effects/get-todos.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoLayoutComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([TodoEffect]),
    RouterModule.forChild([{ path: '', component: TodoLayoutComponent }]),
  ],
})
export class TodoModule {}
