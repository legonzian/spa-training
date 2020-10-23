import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPickupAvailabilityComponent} from "./product-pickup-availability.component";
import {OutletRefModule} from "@spartacus/storefront";


@NgModule({
  declarations: [ProductPickupAvailabilityComponent],
  exports: [
    ProductPickupAvailabilityComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class ProductPickupAvailabilityModule {
}
