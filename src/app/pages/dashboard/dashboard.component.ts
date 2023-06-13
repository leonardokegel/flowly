import { Component } from '@angular/core';
import { ModalComponent } from '@shared/modal/modal.component';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarHovered = false;
  menuOpen = false;

  constructor(private modalService: ModalService) { }

  onSidebarHovered(hovered: boolean) {
    this.sidebarHovered = hovered;
  }

  onMenuClick(open: boolean) {
    this.menuOpen = open;
  }

  openModal(modal: string, hasBackdropClick: boolean) {
    this.modalService.open(
      ModalComponent,
      {
        data:
        {
          title: 'Modal',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          modalType: modal
        },
        hasBackdropClick: hasBackdropClick
      }
    );

    console.log('Open', modal);
  }
}
