import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteLogoComponent} from "./site-logo.component";
import {GenericLinkModule, OutletRefModule} from "@spartacus/storefront";


@NgModule({
  declarations: [SiteLogoComponent],
  exports: [
    SiteLogoComponent
  ],
  imports: [
    CommonModule,
    GenericLinkModule,
    OutletRefModule
  ]
})
export class SiteLogoModule {
}
