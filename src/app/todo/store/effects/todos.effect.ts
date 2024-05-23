import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getTodosAction,
  getTodosFailureAction,
  getTodosSuccessAction,
} from '../actions/get-todos.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoInterface } from '../../models/todo.model';
import { Injectable } from '@angular/core';
import {
  addTodoAction,
  addTodoFailureAction,
  addTodoSuccessAction,
} from '../actions/add-todo.action';

@Injectable()
export class TodoEffect {
  getTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(getTodosAction),
      switchMap(() => {
        return this.todoService.getTodos().pipe(
          map((todos: TodoInterface[]) => {
            return getTodosSuccessAction({ todos });
          }),
          catchError(() => {
            return of(getTodosFailureAction());
          }),
        );
      }),
    ),
  );

  addTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(addTodoAction),
      switchMap(({ todo }) => {
        return this.todoService.addTodo(todo).pipe(
          map(() => {
            return addTodoSuccessAction();
          }),
          catchError(() => {
            return of(addTodoFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private action$: Actions,
    private todoService: TodoService,
  ) {}
}
