import { Component, Input } from '@angular/core';

import { InputType } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  type: InputType = 'text';

  //TODO: tipar AbstractControl?
  @Input()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control!: any;

  @Input()
  label = '';

  @Input()
  classUp: string[] = [];
}
