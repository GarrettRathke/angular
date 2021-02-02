import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbConnectionStatusComponent } from './db-connection-status.component';

describe('DbConnectionStatusComponent', () => {
  let component: DbConnectionStatusComponent;
  let fixture: ComponentFixture<DbConnectionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbConnectionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbConnectionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
