import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';
import { TodoInterface } from '../../models/todo.model';

export const addTodoAction = createAction(
  ActionTypes.ADD_TODO,
  props<{ todo: TodoInterface }>(),
);
export const addTodoSuccessAction = createAction(ActionTypes.ADD_TODO_SUCCESS);
export const addTodoFailureAction = createAction(ActionTypes.ADD_TODO_FAILURE);
