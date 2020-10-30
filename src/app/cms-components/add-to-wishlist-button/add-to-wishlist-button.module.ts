import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddToWishlistButtonComponent} from './add-to-wishlist-button.component';
import {CmsConfig, ConfigModule, I18nModule, UrlModule} from "@spartacus/core";
import {IconModule} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AddToWishlistButtonComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AddToWishListComponent: {
          component: AddToWishlistButtonComponent,
        },
      }
    } as CmsConfig),
    IconModule,
    I18nModule,
    UrlModule,
    RouterModule
  ]
})
export class AddToWishlistButtonModule {
}
