import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {OrganizationDto} from '../../../dtos/OrganizationDto';
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
  isLoggedIn: boolean = false;
  loggedInUsername: string = 'John Doe';
  availableOrganizations: OrganizationDto[] = [
    {
      id: '-1',
      name: 'Solas',
      memberEmails: ['jonathan.lee.devel@gmail.com'],
      administratorEmails: ['jonathan.lee.devel@gmail.com'],
    },
    {
      id: '-2',
      name: 'Heenaghans',
      memberEmails: ['jonathan.lee.devel@gmail.com'],
      administratorEmails: ['jonathan.lee.devel@gmail.com'],
    },
  ];
  currentOrganization: OrganizationDto = {
    id: '-1',
    name: 'Error Loading Current Organization',
    memberEmails: [],
    administratorEmails: [],
  };

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
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
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
