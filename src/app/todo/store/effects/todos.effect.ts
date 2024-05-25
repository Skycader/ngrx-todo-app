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
import {
  removeTodoAction,
  removeTodoFailureAction,
  removeTodoSuccessAction,
} from '../actions/remove-todo.action';
import {
  checkTodoAction,
  checkTodoFailureAction,
  checkTodoSuccessAction,
} from '../actions/check-todo.action';
import {
  uncheckTodoAction,
  uncheckTodoFailureAction,
  uncheckTodoSuccessAction,
} from '../actions/uncheck-todo.action';

@Injectable()
export class TodoEffect {
  /**
   * Add todo chain:
   * addTodo => getTodo
   *
   */
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

  addTodo$ = createEffect(() =>
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
      ofType(
        addTodoSuccessAction,
        checkTodoSuccessAction,
        uncheckTodoSuccessAction,
        removeTodoSuccessAction,
      ),
      switchMap(() => {
        return of(getTodosAction());
      }),
    ),
  );

  checkTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(checkTodoAction),
      switchMap(({ todoId }) => {
        return this.todoService.checkTodo(todoId).pipe(
          map(() => {
            return checkTodoSuccessAction();
          }),
          catchError(() => {
            return of(checkTodoFailureAction());
          }),
        );
      }),
    ),
  );

  uncheckTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(uncheckTodoAction),
      switchMap(({ todoId }) => {
        return this.todoService.uncheckTodo(todoId).pipe(
          map(() => {
            return uncheckTodoSuccessAction();
          }),
          catchError(() => {
            return of(uncheckTodoFailureAction());
          }),
        );
      }),
    ),
  );

  removeTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(removeTodoAction),
      switchMap(({ todoId }) => {
        return this.todoService.removeTodo(todoId).pipe(
          map(() => {
            return removeTodoSuccessAction();
          }),
          catchError(() => {
            return of(removeTodoFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private action$: Actions,
    private todoService: TodoService,
  ) { }
}
