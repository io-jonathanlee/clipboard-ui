import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrganizationDto} from '../../dtos/OrganizationDto';

@Injectable({
  providedIn: 'root',
})
/**
 * Organization service.
 * @author Jonathan Lee <jonathan.lee.devel@gmail.com>
 */
export class OrganizationService {
  constructor(private httpClient: HttpClient) {
  }

  getOrganizationsWhereMember(): Observable<OrganizationDto[]> {
    return this.httpClient
        .get<OrganizationDto[]>('/api/organizations/where-member');
  }
}
