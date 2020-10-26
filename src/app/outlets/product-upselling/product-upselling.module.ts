import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule, MediaModule, OutletRefModule, ProductCarouselModule} from "@spartacus/storefront";
import {ProductUpsellingComponent} from "./product-upselling.component";
import {UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ProductUpsellingComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductCarouselModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    RouterModule
  ],
  exports: [ProductUpsellingComponent]
})
export class ProductUpsellingModule {
}
