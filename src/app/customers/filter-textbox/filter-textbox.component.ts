import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    Filter: <input type="text" [(ngModel)]="filter" placeholder="Name/City/Total"/>
  `,
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
