import { Component } from '@angular/core';
import { ThemeService } from './todo/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-todo-app';
  constructor(private theme: ThemeService) { }
}
