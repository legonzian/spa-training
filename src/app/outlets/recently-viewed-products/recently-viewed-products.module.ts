import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecentlyViewedProductsComponent} from "./recently-viewed-products.component";
import {CarouselModule, CurrentProductService, MediaModule, OutletRefModule} from "@spartacus/storefront";
import {CustomCurrentProductService} from "../../services/custom-current-product.service";
import {UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";
import {RecentlyViewedModule} from "./store/recently-viewed.module";


@NgModule({
  declarations: [RecentlyViewedProductsComponent],
  exports: [RecentlyViewedProductsComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    CarouselModule,
    UrlModule,
    RouterModule,
    MediaModule,
    RecentlyViewedModule
  ],
  providers: [
    {provide: CurrentProductService, useClass: CustomCurrentProductService}
  ]
})
export class RecentlyViewedProductsModule {
}
