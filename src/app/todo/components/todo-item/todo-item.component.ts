import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../models/todo.model';
import { Todo } from '../../models/todo.class';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { removeTodoAction } from '../../store/actions/remove-todo.action';
import { checkTodoAction } from '../../store/actions/check-todo.action';
import { uncheckTodoAction } from '../../store/actions/uncheck-todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: TodoInterface = new Todo();

  constructor(private store: Store<AppStateInterface>) { }

  public checkTodo(todoId: number) {
    this.store.dispatch(checkTodoAction({ todoId }));
  }

  public uncheckTodo(todoId: number) {
    this.store.dispatch(uncheckTodoAction({ todoId }));
  }

  public removeTodo(todoId: number) {
    this.store.dispatch(removeTodoAction({ todoId }));
  }
}
