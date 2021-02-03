// MODULES 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // gives access to NgModel
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { CoffeesComponent } from './coffees/coffees.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { DbConnectionStatusComponent } from './db-connection-status/db-connection-status.component';
import { HelpComponent } from './help/help.component';
import { TabComponent } from './tab/tab.component';

// PIPES
import { DBBooleanPipe } from './pipes/dbBoolean';

@NgModule({
  declarations: [
    AppComponent,
    CoffeesComponent,
    CoffeeDetailComponent,
    DbConnectionStatusComponent,
    HelpComponent,
    TabComponent,
    DBBooleanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
