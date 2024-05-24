import { Injectable } from '@angular/core';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkTheme = false;
  public get isDarkTheme() {
    const isDarkTheme = this.persistance.getItem('dark-theme');
    if (isDarkTheme) this._isDarkTheme = true;
    return this._isDarkTheme;
  }

  public set isDarkTheme(isDark: boolean) {
    this._isDarkTheme = isDark;
  }
  constructor(private persistance: PersistanceService) {
    this.applyTheme();
  }

  public applyTheme() {
    this.isDarkTheme ? this.enableDarkTheme() : this.disableDarkTheme();
  }

  public enableDarkTheme() {
    document.querySelector('body')!.classList.add('dark-theme');
    document.querySelector('body')!.setAttribute('data-bs-theme', 'dark');
    this.persistance.setItem('dark-theme', 'true');
    this.isDarkTheme = true;
  }

  public disableDarkTheme() {
    document.querySelector('body')!.classList.remove('dark-theme');
    document.querySelector('body')!.setAttribute('data-bs-theme', 'light');
    this.persistance.setItem('dark-theme', 'false');
    this.isDarkTheme = false;
  }

  public toggleTheme() {
    this.isDarkTheme ? this.disableDarkTheme() : this.enableDarkTheme();
  }
}
