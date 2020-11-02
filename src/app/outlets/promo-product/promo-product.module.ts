import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoProductComponent} from "./promo-product.component";
import {
  AddToCartModule,
  MediaModule,
  OutletRefModule,
  ProductListModule,
  StarRatingModule,
  VariantStyleIconsModule
} from "@spartacus/storefront";
import { PromoProductItemComponent } from './promo-product-item/promo-product-item.component';
import {RouterModule} from "@angular/router";
import {I18nModule, UrlModule} from "@spartacus/core";


@NgModule({
  declarations: [PromoProductComponent, PromoProductItemComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule,
    MediaModule,
    RouterModule,
    UrlModule,
    StarRatingModule,
    I18nModule,
    VariantStyleIconsModule,
    AddToCartModule
  ],
  exports: [PromoProductComponent]
})
export class PromoProductModule {
}
