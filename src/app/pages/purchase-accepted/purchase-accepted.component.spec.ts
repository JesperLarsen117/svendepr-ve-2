import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAcceptedComponent } from './purchase-accepted.component';

describe('PurchaseAcceptedComponent', () => {
  let component: PurchaseAcceptedComponent;
  let fixture: ComponentFixture<PurchaseAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
