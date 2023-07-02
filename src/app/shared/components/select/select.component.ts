import { Component, Input } from '@angular/core';

import { options } from './select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  constructor() {
    console.log(this.options);
  }
  @Input()
  options = options.default;

  //TODO: tipar AbstractControl?
  @Input()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control!: any;

  @Input()
  label = '';

  @Input()
  classUp: string[] = [];
}
