import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPickupAvailabilityComponent} from "./product-pickup-availability.component";


@NgModule({
  declarations: [ProductPickupAvailabilityComponent],
  exports: [
    ProductPickupAvailabilityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductPickupAvailabilityModule {
}
