import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPromotionsBannerComponent} from "./product-promotions-banner.component";


@NgModule({
  declarations: [ProductPromotionsBannerComponent],
  exports: [
    ProductPromotionsBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductPromotionsBannerModule {
}
