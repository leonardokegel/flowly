import { Component, Input } from '@angular/core';

import { options } from './select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {

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

  @Input()
  inputClass = "block w-full p-3 pr-10 border border-basic-500 rounded-xl bg-basic-300 focus:ring-primary-500 focus:border-primary-500 placeholder:text-txt-disabled autofill:bg-primary-100";

  @Input()
  labelClass = "block text-sm mb-2 uppercase font-semibold text-txt-disabled";
}
