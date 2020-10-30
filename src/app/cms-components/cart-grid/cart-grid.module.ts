import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartGridDetailsModule} from "./cart-grid-details/cart-grid-details.module";
import {CmsConfig, ConfigModule} from "@spartacus/core";
import {CartGridDetailsComponent} from "./cart-grid-details/cart-grid-details.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartGridDetailsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CartGridDetailsComponent
        }
      }
    } as CmsConfig),
  ]
})
export class CartGridModule {
}
