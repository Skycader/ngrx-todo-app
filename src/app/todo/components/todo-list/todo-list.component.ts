import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { getTodosAction } from '../../store/actions/get-todos.action';
import { TodoInterface } from '../../models/todo.model';
import { addTodoAction } from '../../store/actions/add-todo.action';
import { todosSelector } from '../../store/todo.selector';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public todos$ = this.store.pipe(select(todosSelector));

  constructor(private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.store.dispatch(getTodosAction());
  }

  addTodo(todo: TodoInterface) {
    this.store.dispatch(addTodoAction({ todo }));
  }
}
