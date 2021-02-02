import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { FormsModule } from '@angular/forms';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component'; // gives access to NgModel

@NgModule({
  declarations: [
    AppComponent,
    CoffeesComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
