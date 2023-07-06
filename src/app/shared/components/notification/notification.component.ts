import { Component, Inject } from '@angular/core';
import { MODAL_DATA } from '@shared/modal/modal-tokens';
import { ModalRef } from '@shared/modal/modal.ref';
import { NotificationColor } from './notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(
    private modalRef: ModalRef, 
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    @Inject(MODAL_DATA) public data: IDataModal
  ){
    setTimeout(() => {
      this.modalRef.close();
    }, 10000);
  }

  close() {
    setTimeout(() => {
      this.modalRef.close();
    }, 200);
  }
}

interface IDataModal {
  message: string
  color: NotificationColor
}
