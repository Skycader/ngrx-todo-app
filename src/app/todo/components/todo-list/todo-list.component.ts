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

  public addSimpleTodo() {
    const title = 'xxx';
    this.addTodo({
      id: Date.now(),
      title: title || '',
      description: 'OK',
      deadline: 101,
      done: false,
    });
  }

  todo = ['Get to work'];

  done: string[] = [];

  dragging = false;

  emit(value: any) {
    console.log(value);
    this.dragging = value;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
