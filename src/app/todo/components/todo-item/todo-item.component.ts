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
  public get currentTime() {
    return Date.now();
  }
  public get daysLeft() {
    const daysLeft = Math.floor(
      (this.todo.deadline - Date.now()) / 1000 / 60 / 60 / 24,
    );

    const hours = Math.floor(
      (this.todo.deadline - Date.now()) / 1000 / 60 / 60,
    );

    if (daysLeft === 0) {
      return hours + ' hours left';
    }

    if (daysLeft < 0) {
      return `Todo is overdue for ${Math.abs(daysLeft)} days`;
    }

    return daysLeft + ' days left';
  }

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
