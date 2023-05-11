import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconCardType } from '@shared/icons/icon-card/icon-card.model';
import { PopupType } from './card.model';

interface Card {
  title: string,
  icon: IconCardType,
  openPopup?: PopupType;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  card: Card = {
    title: 'Card Title',
    icon: 'plus'
  };

  @Output()
  openPopup = new EventEmitter<PopupType>();
}
