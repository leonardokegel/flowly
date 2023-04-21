import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bed',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M104,168V80H208a32,32,0,0,1,32,32v56"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <line
      x1="16"
      y1="208"
      x2="16"
      y2="48"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <polyline
      points="16 168 240 168 240 208"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
    <line
      x1="104"
      y1="80"
      x2="16"
      y2="80"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
  </svg>`,
})
export class IconBedComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
