import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
/**
 * Header component.
 */
export class HeaderComponent {
  isLoggedIn: boolean = false;

  /**
   * Method to perform logout functionality.
   */
  doLogout() {
    console.log('doLogout() called...');
  }
}
