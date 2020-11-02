import {Component} from '@angular/core';
import {ProductListItemComponent} from "@spartacus/storefront";

@Component({
  selector: 'promo-product-item',
  templateUrl: './promo-product-item.component.html',
  styleUrls: ['./promo-product-item.component.scss']
})
export class PromoProductItemComponent extends ProductListItemComponent {

  constructor() {
    super();
  }
}
