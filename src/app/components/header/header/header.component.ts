import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
/**
 * Header component.
 */
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUsername: string = 'John Doe';

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  /**
   * Standard constructor.
   * @param {AuthService} authService used to authenticate
   */
  constructor(private authService: AuthService) {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  /**
   * Method to perform logout functionality.
   */
  doLogout() {
    this.authService.logout(true);
  }
}
