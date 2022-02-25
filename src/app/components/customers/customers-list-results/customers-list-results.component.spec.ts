import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListResultsComponent } from './customers-list-results.component';

describe('CustomersListResultsComponent', () => {
  let component: CustomersListResultsComponent;
  let fixture: ComponentFixture<CustomersListResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
