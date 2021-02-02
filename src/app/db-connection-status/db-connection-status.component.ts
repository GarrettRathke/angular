import { Component, OnInit } from '@angular/core';
import { DbMockModel } from '../db-mock-model';

@Component({
  selector: 'app-db-connection-status',
  templateUrl: './db-connection-status.component.html',
  styleUrls: ['./db-connection-status.component.css']
})
export class DbConnectionStatusComponent implements OnInit {

  connection: DbMockModel;

  constructor() {
    this.connection = new DbMockModel();
  }

  ngOnInit(): void {
  }

}
