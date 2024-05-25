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
import { DebugElement } from '@angular/core';

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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should add a todo `Walk the dogs`', (done) => {
    /** Firstly, we gather our properties */
    const addTodoBtn = fixture.debugElement.query(By.css('#add-todo-btn'));
    const todoList = fixture.debugElement.query(By.css('.todo-list'));
    const todoTitleValue = fixture.debugElement.query(
      By.css('#todo-title-input'),
    );
    const todoTitle = 'Walk the dogs';

    /** Secondly, we reinitialize the database */
    todoService.clearTodos().subscribe(() => {
      todoTitleValue.nativeElement.value = todoTitle;
      todoTitleValue.nativeElement.dispatchEvent(new Event('input'));
      addTodoBtn.nativeElement.click();
      fixture.detectChanges();
    });

    /** And finally, when a refresh event emits, we check the results */
    todoEffect.refreshAction$.subscribe(() => {
      fixture.detectChanges();

      expect(
        todoList.children[0].query(By.css('#todo-title')).nativeElement
          .textContent,
      ).toBe(todoTitle);
      done();
    });
  });
});
