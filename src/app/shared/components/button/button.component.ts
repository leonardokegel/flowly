import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ColorButton } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  colorBg: ColorButton = 'primary';

  @Input()
  classUp: string[] = [];

  @Input()
  colorTxt: ColorButton = 'white';

  @Input()
  disabled = false;

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickButton = new EventEmitter<any>();
}
