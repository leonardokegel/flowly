import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-chevron',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M8.75005 14.1667C8.53671 14.1667 8.32338 14.085 8.16088 13.9225C7.83505 13.5967 7.83505 13.07 8.16088 12.7442L10.915 9.99L8.26505 7.24583C7.94588 6.91417 7.95505 6.38667 8.28588 6.0675C8.61755 5.74833 9.14505 5.7575 9.46421 6.0875L12.6825 9.42083C12.9984 9.74833 12.9942 10.2675 12.6725 10.5892L9.33921 13.9225C9.17671 14.085 8.96338 14.1667 8.75005 14.1667" 
      [attr.fill]="fill"
    />
  </svg>`,
})
export class IconChevronComponent {
  @Input()
  fill = 'currentColor';

  @Input()
  width = '20';

  @Input()
  height = '20';
}
