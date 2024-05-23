import { Injectable } from '@angular/core';
import { TodoInterface } from '../models/todo.model';
import { Observable, from, of } from 'rxjs';
import { db } from '../database/db';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  public getTodos(): Observable<TodoInterface[]> {
    return from(db.todo.toArray());
  }

  public addTodo(todo: TodoInterface): Observable<number> {
    return from(db.todo.add(todo));
  }
}
