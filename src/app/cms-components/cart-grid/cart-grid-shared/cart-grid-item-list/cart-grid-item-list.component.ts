import {Component} from '@angular/core';
import {CartItemListComponent} from "@spartacus/storefront";
import {ActiveCartService, SelectiveCartService} from "@spartacus/core";

@Component({
  selector: 'cart-grid-item-list',
  templateUrl: './cart-grid-item-list.component.html',
  styleUrls: ['./cart-grid-item-list.component.scss']
})
export class CartGridItemListComponent extends CartItemListComponent {


  constructor(activeCartService: ActiveCartService, selectiveCartService: SelectiveCartService) {
    super(activeCartService, selectiveCartService);
  }
}
