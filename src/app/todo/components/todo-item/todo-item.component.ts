import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../models/todo.model';
import { Todo } from '../../models/todo.class';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: TodoInterface = new Todo();
}
