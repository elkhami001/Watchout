import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-list-detail',
  templateUrl: './film-list-detail.component.html',
  styleUrls: ['./film-list-detail.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() film: object[];
  someVar: string;
  constructor() { }

  ngOnInit() {
    this.someVar = "This string is from the child"
  }

}
