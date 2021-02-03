import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Little Cafe on the Prairie';
  showHelp: boolean = false;
  showTabs: boolean = true;

  changeMainContent(event: Event): void {
    let sender: string = (event.target as Element).id;
    if(sender == "help") {
      this.showHelp = true;
      this.showTabs = false;
    } else if(sender == "title") {
      this.showHelp = false;
      this.showTabs = true;
    } else {
      this.showHelp = false;
      this.showTabs = true;
    }
  }
}
