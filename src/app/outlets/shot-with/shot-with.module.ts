import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutletRefModule} from "@spartacus/storefront";
import {ShotWithComponent} from "./shot-with.component";
import {IMAGES_NORMALIZER} from "./services/converters";
import {ShotWithNormalizer} from "./services/shot-with.normalizer";

@NgModule({
  declarations: [
    ShotWithComponent
  ],
  exports: [
    ShotWithComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  providers: [
    {provide: IMAGES_NORMALIZER, useClass: ShotWithNormalizer, multi: true}
  ]
})
export class ShotWithModule {
}
