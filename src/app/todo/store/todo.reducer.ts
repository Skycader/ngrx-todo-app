import { Action, createReducer } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.model';

export const initialState: TodoStateInterface = {
  todos: [],
};

const reducer = createReducer(initialState);

export function todoReducer(state: TodoStateInterface, action: Action) {
  return reducer(state, action);
}
