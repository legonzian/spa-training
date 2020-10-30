import {Component} from '@angular/core';
import {CartItemComponent, PromotionService} from "@spartacus/storefront";

@Component({
  selector: 'cart-grid-item',
  templateUrl: './cart-grid-item.component.html',
  styleUrls: ['./cart-grid-item.component.scss']
})
export class CartGridItemComponent extends CartItemComponent {


  constructor(promotionService: PromotionService) {
    super(promotionService);
  }
}
