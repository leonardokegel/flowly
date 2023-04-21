import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-power',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect fill="none"></rect>
    <line
      x1="128"
      y1="48"
      x2="128"
      y2="124"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <path
      d="M176,54.2a88,88,0,1,1-96,0"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
  </svg>`,
})
export class IconPowerComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
