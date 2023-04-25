import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-film-reel',
  template: ` <svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="width"
    [attr.height]="height"
    [attr.fill]="fill"
    viewBox="0 0 256 256"
  >
    <path
      d="M224,216H183.36A103.95,103.95,0,1,0,128,232h96a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"
    ></path>
  </svg>`,
})
export class IconFilmReelComponent {
  @Input()
  fill = '#000';

  @Input()
  width = '24';

  @Input()
  height = '24';
}
