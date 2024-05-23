import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { getTodosAction } from '../../store/actions/get-todos.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodosAction());
  }
}
