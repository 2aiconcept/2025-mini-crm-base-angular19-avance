import { Component, input, output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLoggedIn = input<boolean>();
  logout = output<void>();
  onLogout() {
    this.logout.emit();
  }
}
