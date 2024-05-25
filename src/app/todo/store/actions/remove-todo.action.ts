import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';

export const removeTodoAction = createAction(
  ActionTypes.REMOVE_TODO,
  props<{ todoId: number }>(),
);
export const removeTodoSuccessAction = createAction(
  ActionTypes.REMOVE_TODO_SUCCESS,
);
export const removeTodoFailureAction = createAction(
  ActionTypes.REMOVE_TODO_FAILURE,
);
