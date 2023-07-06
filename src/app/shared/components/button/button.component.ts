import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ColorButton } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonColor: ColorButton = 'primary';
  buttonClasses = 'text-txt-alternate bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800';

  @Input()
  classUp: string[] = [];

  @Input()
  disabled = false;

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickButton = new EventEmitter<any>();

  ngOnInit(): void {
    const colorVariants = {
      primary: 'text-txt-alternate bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800',
      danger: 'text-txt-alternate bg-danger-600 hover:bg-danger-700 focus:bg-danger-700 active:bg-danger-800',
      basic: 'text-txt-alternate bg-basic-600 hover:bg-basic-700 focus:bg-basic-700 active:bg-basic-800',
      warning: 'text-txt-alternate bg-warning-600 hover:bg-warning-700 focus:bg-warning-700 active:bg-warning-800',
      success: 'text-txt-alternate bg-success-600 hover:bg-success-700 focus:bg-success-700 active:bg-success-800',
      icon: 'text-txt-hint !rounded-full !p-2 bg-transparent hover:bg-basic-600/10',
      ghost: 'text-txt-default bg-transparent hover:bg-basic-600/10 focus:bg-basic-300 active:bg-basic-400 hover:text-txt-accent',
    }

    this.buttonClasses = colorVariants[this.buttonColor];
  }
}
