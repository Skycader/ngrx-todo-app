import { TodoInterface } from './todo.model';

export class Todo implements TodoInterface {
  id = 0;
  title = '';
  description = '';
  deadline = 0;
  done = 0;
}
