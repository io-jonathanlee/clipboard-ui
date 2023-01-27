import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {DEFAULT_ORGANIZATION, OrganizationDto} from '../../../dtos/OrganizationDto';
import {OrganizationService} from '../../../services/organization/organization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
/**
 * Header component.
 */
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  isLoggedIn: boolean = false;
  loggedInUsername: string = 'John Doe';
  availableOrganizations: OrganizationDto[] = [];
  currentOrganization: OrganizationDto = DEFAULT_ORGANIZATION;

  /**
   * Standard constructor.
   * @param {AuthService} authService used to authenticate
   * @param {OrganizationService} organizationService used to switch organizations
   */
  constructor(private authService: AuthService,
              private organizationService: OrganizationService) {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.organizationService.getCurrentOrganization().subscribe((currentOrganization) => {
      this.currentOrganization = currentOrganization;
    });
    this.organizationService.getOrganizationWhereInvolved()
        .subscribe((organizations) => {
          this.availableOrganizations = organizations;
        });
    const userInfo = this.authService.getUserInfo();
    if (userInfo) {
      this.loggedInUsername = userInfo.username;
    }
  }

  /**
   * Public access to ngOnInit in order to reload data on login/logout.
   */
  public invokeNgOnInit() {
    this.ngOnInit();
  }

  /**
   * Init method.
   */
  ngOnInit() {
    if (window.screen.width <= 500) {
      this.isMobile = true;
    }
    this.isLoggedIn = this.authService.isAuthenticated();
    const userInfo = this.authService.getUserInfo();
    if (userInfo) {
      this.loggedInUsername = userInfo.username;
    }
    const currentOrganization = this.organizationService.currentOrganization();
    if (currentOrganization) {
      this.currentOrganization = currentOrganization;
    }
  }

  /**
   * Method to perform logout functionality.
   */
  doLogout() {
    this.authService.logout(true);
  }

  updateCurrentOrganization(organization: OrganizationDto) {
    this.organizationService.setCurrentOrganization(organization);
  }
}
