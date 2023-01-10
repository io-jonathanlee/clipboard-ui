import {Component} from '@angular/core';
import {ModalService} from '../../../../services/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
/**
 * Home component.
 */
export class HomeComponent {
  /**
   * Standard constructor.
   * @param {ModalService} modalService used to display messages in a modal
   */
  constructor(public modalService: ModalService) {
  }
}
