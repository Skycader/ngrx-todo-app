import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';
import { TodoInterface } from '../../models/todo.model';

export const getTodosAction = createAction(ActionTypes.GET_TODOS);
export const getTodosSuccessAction = createAction(
  ActionTypes.GET_TODOS_SUCCESS,
  props<{ todos: TodoInterface[] }>(),
);
export const getTodosFailureAction = createAction(
  ActionTypes.GET_TODOS_FAILURE,
);
