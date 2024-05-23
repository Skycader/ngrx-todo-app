// db.ts
import Dexie, { Table } from 'dexie';
import { TodoInterface } from '../models/todo.model';

export class AppDB extends Dexie {
  todo!: Table<TodoInterface, number>;

  constructor() {
    super('ngrx-todo-db');
    this.version(1).stores({
      todo: 'id, title, deadline, done',
    });
  }
}

export const db = new AppDB();
