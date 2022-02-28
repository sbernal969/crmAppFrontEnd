import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerProspectComponent } from './search-customer-prospect.component';

describe('SearchCustomersProspectComponent', () => {
  let component: SearchCustomerProspectComponent;
  let fixture: ComponentFixture<SearchCustomerProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCustomerProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
