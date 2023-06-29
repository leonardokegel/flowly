import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-plus',
  template: `<svg
    [attr.width]="width"
    [attr.height]="width"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      *ngIf="!round"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 7H9V1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1V7H1C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7Z"
      [attr.fill]="fill"
    />
    
    <path 
      *ngIf="round"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M10.0002 8.66666H8.66683V10C8.66683 10.3667 8.36683 10.6667 8.00016 10.6667C7.6335 10.6667 7.3335 10.3667 7.3335 10V8.66666H6.00016C5.6335 8.66666 5.3335 8.36666 5.3335 7.99999C5.3335 7.63333 5.6335 7.33333 6.00016 7.33333H7.3335V5.99999C7.3335 5.63333 7.6335 5.33333 8.00016 5.33333C8.36683 5.33333 8.66683 5.63333 8.66683 5.99999V7.33333H10.0002C10.3668 7.33333 10.6668 7.63333 10.6668 7.99999C10.6668 8.36666 10.3668 8.66666 10.0002 8.66666M8.00016 1.33333C4.32416 1.33333 1.3335 4.324 1.3335 8C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8C14.6668 4.324 11.6762 1.33333 8.00016 1.33333" 
      [attr.fill]="fill"
    />

  </svg>`,
})
export class IconPlusComponent {
  @Input()
  fill = 'currentColor';

  @Input()
  width = '24';

  @Input()
  round = false;
}
