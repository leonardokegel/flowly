import { Component, Inject } from '@angular/core';
import { ModalRef } from './modal.ref';
import { MODAL_DATA } from './modal-tokens';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    private modalRef: ModalRef, 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: any
  ){}

  close() {
    this.modalRef.close();
    console.log('Close', this.data.modalType);
  }
}