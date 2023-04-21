import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.9355 0H17.0645C17.5795 0 18.0005 0.421 18.0005 0.936V1.064C18.0005 1.579 17.5795 2 17.0645 2H0.9355C0.4205 2 0.0005 1.579 0.0005 1.064V0.936C0.0005 0.421 0.4205 0 0.9355 0ZM2 6C2 6.553 1.552 7 1 7C0.448 7 0 6.553 0 6C0 5.447 0.448 5 1 5C1.552 5 2 5.447 2 6ZM4.9355 5H17.0645C17.5795 5 18.0005 5.421 18.0005 5.936V6.064C18.0005 6.579 17.5795 7 17.0645 7H4.9355C4.4205 7 4.0005 6.579 4.0005 6.064V5.936C4.0005 5.421 4.4205 5 4.9355 5ZM17.0645 10H0.9355C0.4205 10 0.0005 10.421 0.0005 10.936V11.064C0.0005 11.579 0.4205 12 0.9355 12H17.0645C17.5795 12 18.0005 11.579 18.0005 11.064V10.936C18.0005 10.421 17.5795 10 17.0645 10Z"
      [attr.fill]="fill"
    />
  </svg>`,
})
export class IconMenuComponent {
  @Input()
  fill = '#3C4522';

  @Input()
  width = '18';

  @Input()
  height = '12';
}