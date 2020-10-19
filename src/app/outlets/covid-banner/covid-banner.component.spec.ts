import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidBannerComponent } from './covid-banner.component';

describe('CovidBannerComponent', () => {
  let component: CovidBannerComponent;
  let fixture: ComponentFixture<CovidBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
