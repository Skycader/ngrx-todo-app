import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoLayoutComponent } from './layouts/todo-layout/todo-layout.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './store/effects/todos.effect';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { FormsModule } from '@angular/forms';
import { WhileDirective } from './utils/directives/while.directive';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoLayoutComponent,
    NavbarComponent,
    SideNavComponent,
    NewTodoComponent,
    WhileDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forFeature([TodoEffect]),
    RouterModule.forChild([{ path: '', component: TodoLayoutComponent }]),
  ],
  exports: [NavbarComponent, SideNavComponent, WhileDirective],
})
export class TodoModule { }
