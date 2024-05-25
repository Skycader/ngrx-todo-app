import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types.enum';

export const uncheckTodoAction = createAction(
  ActionTypes.UNCHECK_TODO,
  props<{ todoId: number }>(),
);
export const uncheckTodoSuccessAction = createAction(
  ActionTypes.UNCHECK_TODO_SUCCESS,
);
export const uncheckTodoFailureAction = createAction(
  ActionTypes.UNCHECK_TODO_FAILURE,
);
