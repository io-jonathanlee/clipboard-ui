import {Component, OnInit} from '@angular/core';
import {OrganizationDto} from '../../../../dtos/OrganizationDto';
import {OrganizationService} from '../../../../services/organization/organization.service';

@Component({
  selector: 'app-view-organizations-where-member',
  templateUrl: './view-organizations-where-member.component.html',
  styleUrls: ['./view-organizations-where-member.component.css'],
})
/**
 * View organizations where user is member component.
 * @author Jonathan Lee <jonathan.lee.devel@gmail.com>
 */
export class ViewOrganizationsWhereMemberComponent implements OnInit {
  organizations: OrganizationDto[] = [];

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.organizationService
        .getOrganizationsWhereMember()
        .subscribe((organizations) => {
          this.organizations = organizations;
        });
  }

  leaveOrganization(organizationId: string) {
    console.log('Leaving organization with ID: ' + organizationId);
  }
}
