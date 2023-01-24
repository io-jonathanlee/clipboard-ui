import {Component, OnInit} from '@angular/core';
import {DeliveryDto} from '../../../../dtos/deliveries/DeliveryDto';
import {ModalService} from '../../../../services/modal/modal.service';
import {DeliveryService} from '../../../../services/delivery/delivery.service';

@Component({
  selector: 'app-view-deliveries',
  templateUrl: './view-deliveries.component.html',
  styleUrls: ['./view-deliveries.component.css'],
})
/**
 * View deliveries component.
 */
export class ViewDeliveriesComponent implements OnInit {
  deliveries: DeliveryDto[] = [];

  constructor(private deliveryService: DeliveryService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.deliveryService.getDeliveries()
        .subscribe((deliveries) => {
          this.deliveries = deliveries;
        });
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
