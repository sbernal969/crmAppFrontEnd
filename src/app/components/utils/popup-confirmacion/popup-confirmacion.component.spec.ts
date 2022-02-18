import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmacionComponent } from './popup-confirmacion.component';

describe('PopupConfirmacionComponent', () => {
  let component: PopupConfirmacionComponent;
  let fixture: ComponentFixture<PopupConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
