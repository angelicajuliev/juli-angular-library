import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myExampleColumns: any[]
  public dataTable: any[]


  constructor() {
    this.myExampleColumns = [
      {
        key: 'firstValue',
        title: 'My title',
      }
    ]

    this.dataTable = [
      { firstValue: 'Testing' }
    ]
  }
}
