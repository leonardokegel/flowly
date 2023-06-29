import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input()
  page = 'clientes';

  @Input()
  haveSettings = false;

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickAdd = new EventEmitter<any>();

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickSettings = new EventEmitter<any>();
}
