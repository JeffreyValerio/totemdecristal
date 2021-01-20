import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened: boolean = false;
  closeOnClickOutside = true;

  title = 'Totem de Cristal';
  constructor(private router: Router) {}

  findProduct(term: string) {
    this.router.navigate(['/search', term]);
    this.opened = false;
    if (term === '') {
      this.router.navigate(['/home']);
    }
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  toggleOpened(): void {
    this.opened = !this.opened;
  }

  toggleCloseOnClickOutside(): void {
    this.closeOnClickOutside = !this.closeOnClickOutside;
  }
}
