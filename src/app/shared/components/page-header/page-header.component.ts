import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalType } from '@shared/components/modal/modal.model';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input()
  page = 'Clientes';

  settingsModal= '' as ModalType;
  createModal = '' as ModalType; 

  ngOnInit(): void {
    this.settingsModal = `SETTINGS_${this.page.slice(0, -1).toUpperCase()}` as ModalType;
    this.createModal = `CREATE_${this.page.slice(0, -1).toUpperCase()}` as ModalType;
  }

  @Input()
  haveSettings = false;

  @Output()
  openPopup = new EventEmitter<ModalType>();
}
