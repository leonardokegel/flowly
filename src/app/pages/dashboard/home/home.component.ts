import { Component } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private modalService: ModalService) { }

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(
      ModalComponent,
      {
        data:
        {
          modalType: modal
        },
        hasBackdropClick: hasBackdropClick
      }
    );
  }
}
