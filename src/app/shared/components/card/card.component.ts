import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalType } from '@shared/components/modal/modal.model';
import { IconCardType } from '@shared/icons/icon-card/icon-card.model';

interface Card {
  title: string;
  icon?: IconCardType;
  openPopup?: ModalType;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  card: Card = {
    title: 'Card Title',
    icon: undefined,
    openPopup: undefined,
  };

  @Output()
  openPopup = new EventEmitter<ModalType>();
}
