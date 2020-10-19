import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromotionsBannerComponent } from './product-promotions-banner.component';

describe('ProductPromotionsBannerComponent', () => {
  let component: ProductPromotionsBannerComponent;
  let fixture: ComponentFixture<ProductPromotionsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPromotionsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPromotionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
