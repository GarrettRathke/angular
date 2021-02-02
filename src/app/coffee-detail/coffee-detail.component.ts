import { Component, OnInit, Input } from '@angular/core';
import { Coffee } from '../coffee';
import { COFFEES } from '../mock-coffees';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  @Input() coffee: Coffee;

  constructor() { 
    this.coffee = COFFEES[0];
  }

  ngOnInit(): void {
  }

}
