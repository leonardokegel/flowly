import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ColorButton } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  colorBg: ColorButton = 'primary';

  @Input()
  classUp: string[] = [];

  @Input()
  disabled = false;


  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickButton = new EventEmitter<any>();

  buttonAlternate = '';

  ngOnInit(): void {
    if (this.colorBg === 'ghost') {
      this.buttonAlternate = 'text-txt-default bg-transparent hover:bg-basic-300 focus:bg-basic-300 active:bg-basic-800';
    }

    if (this.colorBg === 'icon') {
      this.buttonAlternate = 'flex p-2 rounded-full bg-transparent hover:bg-basic-300 text-txt-hint hover:text-txt-accent';
    }
  }
}
