import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { addTodoAction } from '../../store/actions/add-todo.action';
import { TodoInterface } from '../../models/todo.model';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss',
})
export class NewTodoComponent {
  public todoTitle = '';
  public todoDeadline: Date = new Date();

  constructor(private store: Store<AppStateInterface>) { }

  public addTodo(): void {
    const todo: TodoInterface = {
      id: Date.now(),
      title: this.todoTitle,
      description: '',
      deadline: this.todoDeadline.getTime(),
      done: 0,
    };
    this.store.dispatch(addTodoAction({ todo }));

    this.reset();
  }

  public reset(): void {
    this.todoTitle = '';
  }
}
