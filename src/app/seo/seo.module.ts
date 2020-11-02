import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomProductPageMetaResolver} from "./services/custom-product-page-meta.resolver";
import {PageMetaResolver, ProductPageMetaResolver} from "@spartacus/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: ProductPageMetaResolver, useExisting: CustomProductPageMetaResolver}
  ]
})
export class SeoModule {
}
