import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoProductComponent} from "./promo-product.component";
import {OutletRefModule, ProductListModule} from "@spartacus/storefront";


@NgModule({
  declarations: [PromoProductComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule
  ],
  exports: [PromoProductComponent]
})
export class PromoProductModule {
}
