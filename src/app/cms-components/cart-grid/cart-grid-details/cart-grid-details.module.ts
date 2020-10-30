import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartGridSharedModule} from "../cart-grid-shared/cart-grid-shared.module";
import {CartGridDetailsComponent} from './cart-grid-details.component';
import {I18nModule} from "@spartacus/core";
import {PromotionsModule} from "@spartacus/storefront";


@NgModule({
  declarations: [CartGridDetailsComponent],
  imports: [
    CommonModule,
    CartGridSharedModule,
    I18nModule,
    PromotionsModule
  ]
})
export class CartGridDetailsModule {
}
