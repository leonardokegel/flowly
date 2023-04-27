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
  control!: any;

  @Input()
  label = '';

  @Input()
  classUp: string[] = [];
}
