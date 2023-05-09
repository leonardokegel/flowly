import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-status',
  templateUrl: './badge-status.component.html',
  styleUrls: ['./badge-status.component.scss']
})
export class BadgeStatusComponent {
  @Input()
  status: number = 0;
}
