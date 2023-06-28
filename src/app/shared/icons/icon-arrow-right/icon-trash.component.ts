import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-arrow-right',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      d="M5 16H27"
      [attr.stroke]="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 7L27 16L18 25"
      [attr.stroke]="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
})
export class IconArrowRightComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
