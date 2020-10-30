import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartGridItemListComponent } from './cart-grid-item-list/cart-grid-item-list.component';
import { CartGridItemComponent } from './cart-grid-item/cart-grid-item.component';
import {I18nModule, UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";
import {ItemCounterModule, MediaModule, PromotionsModule} from "@spartacus/storefront";



@NgModule({
  declarations: [CartGridItemListComponent, CartGridItemComponent],
  exports: [
    CartGridItemListComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule,
    MediaModule,
    UrlModule,
    ItemCounterModule,
    PromotionsModule
  ]
})
export class CartGridSharedModule { }
