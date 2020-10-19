import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutletsComponent} from './outlets.component';
import {ProductPromotionsBannerModule} from "./product-promotions-banner/product-promotions-banner.module";
import {CovidBannerModule} from "./covid-banner/covid-banner.module";
import {ProductPickupAvailabilityModule} from "./product-pickup-availability/product-pickup-availability.module";
import {SiteLogoModule} from "./site-logo/site-logo.module";

@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    CovidBannerModule,
    ProductPickupAvailabilityModule,
    ProductPromotionsBannerModule,
    SiteLogoModule
  ],
  exports: [
    OutletsComponent
  ]
})
export class OutletsModule {
}
