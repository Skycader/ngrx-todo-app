import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from '../../store/effects/todos.effect';
import { todoReducer } from '../../store/todo.reducer';
import { MaterialModule } from '../../../material/material.module';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { By } from '@angular/platform-browser';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoEffect: TodoEffect;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, NewTodoComponent, TodoItemComponent],
      imports: [
        HttpClientModule,
        MaterialModule,
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('todo', todoReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TodoEffect]),
      ],
      providers: [TodoEffect],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoEffect = TestBed.inject(TodoEffect);
    todoService = TestBed.inject(TodoService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', (done) => {
    const addTodoBtn = fixture.debugElement.query(By.css('#add-todo-btn'));

    const todoTitleValue = fixture.debugElement.query(
      By.css('#todo-title-input'),
    );

    todoEffect.refreshAction$.subscribe(() => {
      fixture.detectChanges();

      const todos = fixture.debugElement.queryAll(By.css('#todo-title'));
      console.log(todos);
      expect(todos.length).toBe(1);
      done();
    });

    todoService.clearTodos().subscribe(() => {
      todoTitleValue.nativeElement.value = 'Walk the dogs';
      addTodoBtn.nativeElement.click();
      fixture.detectChanges();
    });
  });
});
