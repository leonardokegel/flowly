import { Component, Input } from '@angular/core';
import { Status } from './badge-status';

@Component({
  selector: 'app-badge-status',
  templateUrl: './badge-status.component.html',
  styleUrls: ['./badge-status.component.scss']
})
export class BadgeStatusComponent {
  @Input()
  status: Status = 0;
}
