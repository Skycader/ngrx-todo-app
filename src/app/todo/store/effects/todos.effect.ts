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
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';

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

  refreshAction$ = createEffect(() =>
    this.action$.pipe(
      ofType(addTodoSuccessAction),
      switchMap(() => {
        return of(getTodosAction());
      }),
    ),
  );

  constructor(
    private action$: Actions,
    private todoService: TodoService,
  ) {}
}
