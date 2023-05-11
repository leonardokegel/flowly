import { Component, Input } from '@angular/core';
import { IconSidebarType } from './icon-sidebar.model';

@Component({
  selector: 'app-icon-sidebar',
  template: `<svg 
    [attr.width]="width" 
    [attr.height]="width" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    [ngSwitch]="iconType"
  >
    <path 
      *ngSwitchCase="'dashboard'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M4.16667 2.5H7.5C8.41917 2.5 9.16667 3.2475 9.16667 4.16667V7.5C9.16667 8.41917 8.41917 9.16667 7.5 9.16667H4.16667C3.2475 9.16667 2.5 8.41917 2.5 7.5V4.16667C2.5 3.2475 3.2475 2.5 4.16667 2.5ZM12.5 2.5H15.8333C16.7525 2.5 17.5 3.2475 17.5 4.16667V7.5C17.5 8.41917 16.7525 9.16667 15.8333 9.16667H12.5C11.5808 9.16667 10.8333 8.41917 10.8333 7.5V4.16667C10.8333 3.2475 11.5808 2.5 12.5 2.5ZM7.5 10.8333H4.16667C3.2475 10.8333 2.5 11.5808 2.5 12.5V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5H7.5C8.41917 17.5 9.16667 16.7525 9.16667 15.8333V12.5C9.16667 11.5808 8.41917 10.8333 7.5 10.8333ZM12.5 10.8333H15.8333C16.7525 10.8333 17.5 11.5808 17.5 12.5V15.8333C17.5 16.7525 16.7525 17.5 15.8333 17.5H12.5C11.5808 17.5 10.8333 16.7525 10.8333 15.8333V12.5C10.8333 11.5808 11.5808 10.8333 12.5 10.8333Z" 
      fill="currentColor"
    />
    <path 
      *ngSwitchCase="'clientes'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M7.50033 9.16667C9.33866 9.16667 10.8337 7.67167 10.8337 5.83333C10.8337 3.995 9.33866 2.5 7.50033 2.5C5.66199 2.5 4.16699 3.995 4.16699 5.83333C4.16699 7.67167 5.66199 9.16667 7.50033 9.16667ZM14.167 10.8333C15.5453 10.8333 16.667 9.71167 16.667 8.33333C16.667 6.955 15.5453 5.83333 14.167 5.83333C12.7887 5.83333 11.667 6.955 11.667 8.33333C11.667 9.71167 12.7887 10.8333 14.167 10.8333ZM18.3337 15.8333C18.3337 16.2933 17.9612 16.6667 17.5003 16.6667H13.3337C13.3337 17.1267 12.9612 17.5 12.5003 17.5H2.50033C2.03949 17.5 1.66699 17.1267 1.66699 16.6667C1.66699 13.45 4.28449 10.8333 7.50033 10.8333C9.10616 10.8333 10.5612 11.4858 11.617 12.5383C12.3412 11.9783 13.2328 11.6667 14.167 11.6667C16.4645 11.6667 18.3337 13.5358 18.3337 15.8333Z" 
      fill="currentColor"
    />
    <path 
      *ngSwitchCase="'propostas'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M16.2503 17.0833H3.75033C2.60199 17.0833 1.66699 16.1742 1.66699 15.0567V4.94334C1.66699 3.82584 2.60199 2.91667 3.75033 2.91667H7.58449C7.83366 2.91667 8.07116 3.02917 8.22949 3.22251L10.3953 5.87167H16.2503C17.3987 5.87167 18.3337 6.78084 18.3337 7.89834V15.0567C18.3337 16.1742 17.3987 17.0833 16.2503 17.0833" 
      fill="currentColor"
    />
    <path 
      *ngSwitchCase="'contratos'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M8.33366 4.58333C8.33366 4.35333 8.52033 4.16667 8.75033 4.16667H11.2503C11.4803 4.16667 11.667 4.35333 11.667 4.58333V5.83333H8.33366V4.58333ZM5.83366 17.5H14.167V5.83333H13.3337V4.58333C13.3337 3.435 12.3987 2.5 11.2503 2.5H8.75033C7.60199 2.5 6.66699 3.435 6.66699 4.58333V5.83333H5.83366V17.5ZM15.8337 5.83333V17.5C17.212 17.5 18.3337 16.3783 18.3337 15V8.33333C18.3337 6.955 17.212 5.83333 15.8337 5.83333ZM1.66699 8.33333C1.66699 6.955 2.78866 5.83333 4.16699 5.83333V17.5C2.78866 17.5 1.66699 16.3783 1.66699 15V8.33333Z" 
      fill="currentColor"
    />
    <path 
      *ngSwitchCase="'projetos'"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M12.2613 6.66667C11.933 6.66667 11.6663 6.34917 11.6663 5.95834V3.31501L14.7847 6.66667H12.2613ZM12.4997 15H7.49967C7.03967 15 6.66634 14.6267 6.66634 14.1667C6.66634 13.7067 7.03967 13.3333 7.49967 13.3333H12.4997C12.9605 13.3333 13.333 13.7067 13.333 14.1667C13.333 14.6267 12.9605 15 12.4997 15V15ZM7.49967 10H9.99967C10.4597 10 10.833 10.3733 10.833 10.8333C10.833 11.2933 10.4597 11.6667 9.99967 11.6667H7.49967C7.03967 11.6667 6.66634 11.2933 6.66634 10.8333C6.66634 10.3733 7.03967 10 7.49967 10V10ZM16.4497 6.10667L12.7463 1.94001C12.5888 1.76584 12.3647 1.66667 12.1297 1.66667H5.46301C4.28884 1.66667 3.33301 2.60167 3.33301 3.75001V16.25C3.33301 17.3983 4.28884 18.3333 5.46301 18.3333H14.5363C15.7113 18.3333 16.6663 17.3983 16.6663 16.25V6.66667C16.6663 6.45917 16.5888 6.26001 16.4497 6.10667V6.10667Z" 
      fill="currentColor"
    />
    <path
      *ngSwitchDefault
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M4.16667 2.5H7.5C8.41917 2.5 9.16667 3.2475 9.16667 4.16667V7.5C9.16667 8.41917 8.41917 9.16667 7.5 9.16667H4.16667C3.2475 9.16667 2.5 8.41917 2.5 7.5V4.16667C2.5 3.2475 3.2475 2.5 4.16667 2.5ZM12.5 2.5H15.8333C16.7525 2.5 17.5 3.2475 17.5 4.16667V7.5C17.5 8.41917 16.7525 9.16667 15.8333 9.16667H12.5C11.5808 9.16667 10.8333 8.41917 10.8333 7.5V4.16667C10.8333 3.2475 11.5808 2.5 12.5 2.5ZM7.5 10.8333H4.16667C3.2475 10.8333 2.5 11.5808 2.5 12.5V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5H7.5C8.41917 17.5 9.16667 16.7525 9.16667 15.8333V12.5C9.16667 11.5808 8.41917 10.8333 7.5 10.8333ZM12.5 10.8333H15.8333C16.7525 10.8333 17.5 11.5808 17.5 12.5V15.8333C17.5 16.7525 16.7525 17.5 15.8333 17.5H12.5C11.5808 17.5 10.8333 16.7525 10.8333 15.8333V12.5C10.8333 11.5808 11.5808 10.8333 12.5 10.8333Z" 
      fill="currentColor"
    />
  </svg>`,
})
export class IconSidebarComponent {
  @Input()
  iconType?: IconSidebarType;

  @Input()
  width = '20';
}
