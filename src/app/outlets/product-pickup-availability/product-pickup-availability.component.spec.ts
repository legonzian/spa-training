import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPickupAvailabilityComponent } from './product-pickup-availability.component';

describe('ProductPickupAvailabilityComponent', () => {
  let component: ProductPickupAvailabilityComponent;
  let fixture: ComponentFixture<ProductPickupAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPickupAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPickupAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
