import { Component, ContentChild, Input } from '@angular/core';
import { TableColumn } from './ngx-juli-table.class';

@Component({
  selector: 'ngx-juli-table',
  templateUrl: './ngx-juli-table.component.html',
  styleUrls: ['./ngx-juli-table.component.scss'],
})
export class NgxJuliTableComponent {
  @Input() columns: TableColumn[];
  @Input() data?: any[]

  // content children
  @ContentChild('cellTemplates', { static: false }) cellTemplates?: HTMLElement;

  constructor() {
    this.columns = []
  }
}
