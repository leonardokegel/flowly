import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-square-four',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <rect
      x="48"
      y="48"
      width="64"
      height="64"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></rect>
    <rect
      x="144"
      y="48"
      width="64"
      height="64"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></rect>
    <rect
      x="48"
      y="144"
      width="64"
      height="64"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></rect>
    <rect
      x="144"
      y="144"
      width="64"
      height="64"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></rect>
  </svg>`,
})
export class IconSquareFourComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
