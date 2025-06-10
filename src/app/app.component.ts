import { Component } from '@angular/core';
import { UiLayoutComponent } from './layout/ui-layout/ui-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UiLayoutComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn = true;
  logOut() {
    this.isLoggedIn = false;
  }
}
