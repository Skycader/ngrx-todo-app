import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { getTodosAction } from '../../store/actions/get-todos.action';
import { TodoInterface } from '../../models/todo.model';
import { addTodoAction } from '../../store/actions/add-todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodosAction());
  }

  addTodo(todo: TodoInterface) {
    this.store.dispatch(addTodoAction({ todo }));
  }

  public addSimpleTodo() {
    this.addTodo({
      id: Date.now(),
      title: 'TITLE',
      description: 'OK',
      deadline: 101,
      done: false,
    });
  }
}
