import { Action, createReducer, on } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.model';
import { getTodosSuccessAction } from './actions/get-todos.action';

export const initialState: TodoStateInterface = {
  todos: [],
};

const reducer = createReducer(
  initialState,
  on(
    getTodosSuccessAction,
    (state, action): TodoStateInterface => ({
      ...state,
      todos: action.todos,
    }),
  ),
);

export function todoReducer(state: TodoStateInterface, action: Action) {
  return reducer(state, action);
}
