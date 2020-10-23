import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutletsComponent} from './outlets.component';
import {CovidBannerModule} from "./covid-banner/covid-banner.module";
import {ProductPickupAvailabilityModule} from "./product-pickup-availability/product-pickup-availability.module";
import {SiteLogoModule} from "./site-logo/site-logo.module";
import {ShotWithModule} from "./shot-with/shot-with.module";

@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    CovidBannerModule,
    ProductPickupAvailabilityModule,
    SiteLogoModule,
    ShotWithModule
  ],
  exports: [
    OutletsComponent
  ]
})
export class OutletsModule {
}
