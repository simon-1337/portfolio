import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() darkMode = false;

  showMobile: Boolean = false;

  /**
   * This function is used to set the variable to show the mobile menu to true
   */
  openMobileMenu() {
    this.showMobile = true;
  }


  /**
   * This function is used to set the variable to show the mobile menu to false
   */
  closeMobileMenu() {
    this.showMobile = false;
  }
}
