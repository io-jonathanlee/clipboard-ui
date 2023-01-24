import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DeliveryDto} from '../../dtos/deliveries/DeliveryDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * Delivery service.
 *
 * @author Jonathan Lee <jonathan.lee.devel@gmail.com>
 */
export class DeliveryService {
  /**
   * Standard constructor
   * @param {HttpClient} httpClient used to access delivery API
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * Method to obtain all deliveries for a given organization.
   * @return {Observable<DeliveryDto[]>} deliveries observable
   */
  public getDeliveries(): Observable<DeliveryDto[]> {
    return this.httpClient
        .get<DeliveryDto[]>('/api/deliveries');
  }
}
