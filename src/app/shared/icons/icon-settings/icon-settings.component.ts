import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-settings',
  template: `<svg 
    [attr.width]="width"
    [attr.height]="width"
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
  
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M12.0001 10.5C11.1731 10.5 10.5001 11.173 10.5001 12C10.5001 12.827 11.1731 13.5 12.0001 13.5C12.8271 13.5 13.5001 12.827 13.5001 12C13.5001 11.173 12.8271 10.5 12.0001 10.5ZM12.0001 15.5C10.0701 15.5 8.50012 13.93 8.50012 12C8.50012 10.07 10.0701 8.5 12.0001 8.5C13.9301 8.5 15.5001 10.07 15.5001 12C15.5001 13.93 13.9301 15.5 12.0001 15.5ZM21.8921 10.319L21.1051 7.798C20.9171 7.193 20.5071 6.704 19.9521 6.42C19.4111 6.143 18.7961 6.096 18.2201 6.288L17.8801 6.401C17.3441 6.582 16.7461 6.482 16.2871 6.137L16.1801 6.056C15.7431 5.728 15.4841 5.193 15.4861 4.627L15.4881 4.348C15.4901 3.713 15.2481 3.118 14.8051 2.673C14.3761 2.242 13.8091 2.004 13.2071 2.003L10.6601 2H10.6561C9.40212 2 8.37812 3.042 8.37312 4.326L8.37212 4.567C8.37012 5.165 8.09512 5.729 7.63912 6.077L7.51012 6.175C6.99712 6.565 6.33212 6.676 5.73312 6.472C5.17512 6.281 4.57812 6.322 4.05012 6.588C3.51012 6.861 3.11112 7.335 2.92612 7.922L2.11012 10.517C1.72312 11.749 2.37312 13.041 3.59012 13.458L3.75412 13.514C4.27212 13.691 4.68912 14.143 4.87312 14.725L4.92812 14.893C5.14712 15.539 5.07112 16.22 4.69712 16.75C3.97712 17.773 4.19612 19.216 5.18612 19.966L7.25812 21.54C7.65612 21.842 8.12712 22 8.61412 22C8.72912 22 8.84512 21.992 8.96112 21.974C9.57312 21.878 10.1101 21.543 10.4721 21.03L10.7031 20.702C11.0351 20.23 11.5421 19.951 12.1311 19.935C12.7181 19.902 13.2781 20.208 13.6281 20.712L13.7461 20.884C14.1051 21.402 14.6411 21.742 15.2551 21.841C15.8641 21.938 16.4711 21.787 16.9661 21.413L19.0271 19.857C20.0211 19.108 20.2491 17.66 19.5351 16.628L19.2741 16.253C18.9461 15.779 18.8501 15.162 19.0161 14.601C19.1971 13.989 19.6491 13.509 20.2261 13.315L20.4271 13.248C21.6141 12.851 22.2711 11.537 21.8921 10.319Z" 
    [attr.fill]="fill"
  />

  </svg>
  `
})
export class IconSettingsComponent {
  @Input()
  width = '24';

  @Input()
  fill = 'currentColor';
}
