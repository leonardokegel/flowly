import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  title = '';

  @Output()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickIcon = new EventEmitter<any>();
}
