import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modals } from '../../../const/modals';

@Injectable({
  providedIn: 'root',
})
export class ModalService<T extends any = void> {
  isVisible$ = new BehaviorSubject(false);

  modalData: T | null = null;
  currentModal: Modals = Modals.DELETE_USER;

  open(currentModal: Modals, modalData?: T) {
    if (modalData) this.modalData = modalData;
    this.currentModal = currentModal;
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
    this.modalData = null;
  }

  constructor() {}
}
