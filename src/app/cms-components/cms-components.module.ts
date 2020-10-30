import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartGridModule} from "./cart-grid/cart-grid.module";
import {AddToWishlistButtonModule} from "./add-to-wishlist-button/add-to-wishlist-button.module";
import {ProductUpsellingModule} from "./product-upselling/product-upselling.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartGridModule,
    AddToWishlistButtonModule,
    ProductUpsellingModule,
  ]
})
export class CmsComponentsModule {
}
