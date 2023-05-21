import { Component } from '@angular/core';
import { ModalService } from '../../lib/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
}
