import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeBackendService } from '../coffee-backend.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  coffees: Coffee[] = [];
  selectedCoffee!: Coffee;

  // Angular2 framework recognizes the service as DI
  constructor(private coffeService: CoffeeBackendService) {

  }

  // this happens after the constructor
  ngOnInit(): void {
    this.getCoffees();
  }

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
    //this.coffeService.getCoffees();
  }

  getCoffees(): void {
    // TODO: set initial selected coffee based on back end data
    //this.selectedCoffee.name = this.coffeService.getCoffees();
    //this.selectedCoffee.id = COFFEES.find(element => element.name == this.selectedCoffee.name)!.id;
  
    this.coffeService.getCoffees().subscribe(
      result => this.coffees = result
    );    
  }

}
