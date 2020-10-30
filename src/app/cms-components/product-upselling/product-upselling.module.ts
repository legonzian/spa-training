import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductUpsellingComponent} from './product-upselling.component';
import {CarouselModule, MediaModule} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {CmsConfig, ConfigModule, UrlModule} from "@spartacus/core";


@NgModule({
  declarations: [ProductUpsellingComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductReferencesComponent: {
          component: ProductUpsellingComponent
        }
      }
    } as CmsConfig)
  ]
})
export class ProductUpsellingModule {
}
