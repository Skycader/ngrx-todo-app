import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public currentScroll = 0;
  public hideNavbar = false;

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    this.hideNavbar =
      window.scrollY > this.currentScroll && this.currentScroll > 56
        ? true
        : false;
    this.currentScroll = window.scrollY;
  }

  constructor(
    private navbarService: NavbarService,
    public themeService: ThemeService,
  ) { }

  public openSideNav() {
    this.navbarService.openSideNav();
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
}
