import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { COFFEES } from '../mock-coffees';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  coffees = COFFEES;
  selectedCoffee: Coffee;

  constructor() {
    this.selectedCoffee = this.coffees[0];
   }

  ngOnInit(): void {
  }

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
    //window.alert("selected coffee: " + this.selectedCoffee.name);
  }

}
