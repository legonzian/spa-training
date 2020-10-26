import {Component} from '@angular/core';
import {Product, ProductScope, ProductService} from "@spartacus/core";
import {interval, Observable} from "rxjs";


@Component({
  selector: 'promo-product',
  templateUrl: './promo-product.component.html',
  styleUrls: ['./promo-product.component.scss']
})
export class PromoProductComponent {
  protected readonly DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
  private promoProducts: string[] = ['300938', '553637', '1981415', '1934796', '592506'];
  public randomProduct$: Observable<Product> = this.productService.get(this.promoProducts[0], this.DEFAULT_PRODUCT_SCOPE);

  constructor(private productService: ProductService) {
    interval(10000).subscribe(() => {
      let random = Math.floor(Math.random() * 5);
      this.randomProduct$ = this.productService.get(this.promoProducts[random], this.DEFAULT_PRODUCT_SCOPE);
    });
  }


}
