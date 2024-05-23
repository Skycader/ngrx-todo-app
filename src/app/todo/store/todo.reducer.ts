import { Action, createReducer } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.model';

export const initialState: TodoStateInterface = {
  todos: [],
};

const todoReducer = createReducer(initialState);

export function reducer(state: TodoStateInterface, action: Action) {
  return todoReducer(state, action);
}
