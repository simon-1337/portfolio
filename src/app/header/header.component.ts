import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() darkMode = false;

  showMobile: Boolean = false;

  openMobileMenu() {
    this.showMobile = true;
  }

  closeMobileMenu() {
    this.showMobile = false;
  }
}
