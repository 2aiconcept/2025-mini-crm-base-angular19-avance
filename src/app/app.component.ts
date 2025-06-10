import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/services';
import { HeaderComponent, UiLayoutComponent } from '@layout/components';

@Component({
  selector: 'app-root',
  imports: [UiLayoutComponent, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedIn;
}
