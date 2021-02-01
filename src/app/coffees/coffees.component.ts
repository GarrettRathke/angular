import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/coffee';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  coffee: Coffee = {
    id: 1,
    name: 'Mocha'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
