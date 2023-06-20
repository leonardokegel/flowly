import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-cel',
  templateUrl: './table-cel.component.html',
  styleUrls: ['./table-cel.component.scss']
})
export class TableCelComponent implements OnInit {
  @Input()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any = ['title', 'cel value'];

  highestStatus = 0;
  isDropdownClosed = true;

  ngOnInit(): void {
    if (Array.isArray(this.item[1])) {
      this.highestStatus = Math.max(...this.item[1].map(({status}) => status));
    }
  }

  openDropdown() {
    this.isDropdownClosed = this.isDropdownClosed ? false: true;
  }
}
