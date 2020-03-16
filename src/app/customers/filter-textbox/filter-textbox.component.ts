import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    Filter: <input type="text"/>
  `,
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
