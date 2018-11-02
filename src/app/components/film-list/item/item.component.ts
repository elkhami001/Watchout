import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() film: object[];
  someVar: string;
  constructor() { }

  ngOnInit() {
    this.someVar = "This string is from the child"
  }

}
