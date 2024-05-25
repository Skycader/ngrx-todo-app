import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';

export const checkTodoAction = createAction(
  ActionTypes.CHECK_TODO,
  props<{ todoId: number }>(),
);
export const checkTodoSuccessAction = createAction(
  ActionTypes.CHECK_TODO_SUCCESS,
);
export const checkTodoFailureAction = createAction(
  ActionTypes.CHECK_TODO_FAILURE,
);
