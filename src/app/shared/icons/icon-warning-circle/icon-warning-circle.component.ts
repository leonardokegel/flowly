import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-warning-circle',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 256 256"
  >
    <rect fill="none"></rect>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      [attr.stroke]="stroke"
      stroke-miterlimit="10"
      stroke-width="16"
    ></circle>
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <circle cx="128" cy="172" r="12" [attr.fill]="stroke"></circle>
  </svg> `,
})
export class IconWarningCircleComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
