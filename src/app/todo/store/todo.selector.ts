import { createSelector } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.model';
import { AppStateInterface } from '../../models/app-state.model';

export const todoFeatureSelector = (
  state: AppStateInterface,
): TodoStateInterface => state.todo;

export const todosSelector = createSelector(
  todoFeatureSelector,
  (todoState: TodoStateInterface) => todoState.todos,
);
