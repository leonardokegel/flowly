import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-camera',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <circle
      cx="128"
      cy="132"
      r="36"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></circle>
  </svg>`,
})
export class IconCameraComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
