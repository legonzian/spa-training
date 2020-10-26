import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutletsComponent} from './outlets.component';
import {CovidBannerModule} from "./covid-banner/covid-banner.module";
import {ProductPickupAvailabilityModule} from "./product-pickup-availability/product-pickup-availability.module";
import {SiteLogoModule} from "./site-logo/site-logo.module";
import {ShotWithModule} from "./shot-with/shot-with.module";
import {RecentlyViewedProductsModule} from "./recently-viewed-products/recently-viewed-products.module";
import {PromoProductModule} from "./promo-product/promo-product.module";
import {AutoLogoutModule} from "./auto-logout/auto-logout.module";
import {ProductUpsellingModule} from "./product-upselling/product-upselling.module";

@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    CovidBannerModule,
    ProductPickupAvailabilityModule,
    SiteLogoModule,
    ShotWithModule,
    RecentlyViewedProductsModule,
    PromoProductModule,
    AutoLogoutModule,
    ProductUpsellingModule
  ],
  exports: [
    OutletsComponent
  ]
})
export class OutletsModule {
}
