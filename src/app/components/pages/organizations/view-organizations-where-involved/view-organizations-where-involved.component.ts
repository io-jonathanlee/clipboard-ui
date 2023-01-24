import {Component, OnInit} from '@angular/core';
import {OrganizationDto} from '../../../../dtos/OrganizationDto';
import {OrganizationService} from '../../../../services/organization/organization.service';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-view-organizations-where-involved',
  templateUrl: './view-organizations-where-involved.component.html',
  styleUrls: ['./view-organizations-where-involved.component.css'],
})
export class ViewOrganizationsWhereInvolvedComponent implements OnInit {
  organizations: OrganizationDto[] = [];

  /**
   * Standard constructor.
   * @param {OrganizationService} organizationService used to access API
   */
  constructor(private organizationService: OrganizationService,
              private authService: AuthService) {
  }

  /**
   * Init method.
   */
  ngOnInit() {
    this.organizationService
        .getOrganizationWhereInvolved()
        .subscribe((organizations) => {
          this.organizations = organizations;
        });
  }

  isAdmin(organization: OrganizationDto) {
    const loginInfo = this.authService.getUserInfo();
    if (loginInfo) {
      return organization.administratorEmails.includes(loginInfo.username);
    }
    return false;
  }

  selectOrganization(organization: OrganizationDto) {
    this.organizationService.setCurrentOrganization(organization);
  }
}
