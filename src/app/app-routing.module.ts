import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), TodoModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
