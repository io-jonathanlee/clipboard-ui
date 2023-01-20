import {Component} from '@angular/core';
import {DeliveryDto} from '../../../../dtos/deliveries/DeliveryDto';
import {ModalService} from '../../../../services/modal/modal.service';

@Component({
  selector: 'app-view-deliveries',
  templateUrl: './view-deliveries.component.html',
  styleUrls: ['./view-deliveries.component.css'],
})
/**
 * View deliveries component.
 */
export class ViewDeliveriesComponent {
  deliveries: DeliveryDto[] = [
    {
      id: '1234',
      title: 'Marie Hardiman',
      details: 'Salmon Dinner',
      address: 'Headford Road, H81 E16H5',
      delivered: false,
    },
    {
      id: '4567',
      title: 'Jack Rehn',
      details: 'Roast Beef Dinner',
      address: 'Headford Town, H99 E3455',
      delivered: false,
    },
  ];

  constructor(private modalService: ModalService) {
  }

  markOrUnmarkDeliveryAsDelivered(deliveryId: string) {
    const deliveredSpan = document.getElementById(`span_${deliveryId}`);
    const markDeliveredButton = document.getElementById(`button_${deliveryId}`);
    if (deliveredSpan && markDeliveredButton) {
      if (deliveredSpan.style.visibility === 'hidden') {
        deliveredSpan.style.visibility = 'visible';
        markDeliveredButton.innerHTML = 'Unmark Delivered';
      } else {
        deliveredSpan.style.visibility = 'hidden';
        markDeliveredButton.innerHTML = 'Mark Delivered';
      }
    } else {
      this.modalService.showModal('Error', 'An unknown state error has occurred, please refresh the page');
    }
  }
}
