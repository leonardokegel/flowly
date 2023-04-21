import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-chat',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect fill="none"></rect>
    <path
      d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
      fill="none"
      [attr.stroke]="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
  </svg>`,
})
export class IconChatComponent {
  @Input()
  stroke = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
