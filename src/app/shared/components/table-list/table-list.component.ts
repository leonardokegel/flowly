import { Component, Input, OnInit } from '@angular/core';
import { Row } from './table-list.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input()
  rows: Row[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowsArray: any[] = [];
  columnsArray: string[] = [];
  gridColumns = 'repeat(1, minmax(200px, 1fr))';

  ngOnInit(): void {
    this.rowsArray = this.rows.map(row => Object.entries(row));
    this.columnsArray = this.rows.map(row => Object.keys(row))[0];
    this.gridColumns = `repeat(${this.columnsArray.length - 1}, minmax(200px, 1fr))`;
  }
}
