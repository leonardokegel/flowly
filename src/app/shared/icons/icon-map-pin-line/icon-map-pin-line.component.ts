import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-map-pin-line',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect fill="none"></rect>
    <line
      x1="56"
      y1="232"
      x2="200"
      y2="232"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <circle
      cx="128"
      cy="104"
      r="32"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
    <path
      d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
  </svg>`,
})
export class IconMapPinLineComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
