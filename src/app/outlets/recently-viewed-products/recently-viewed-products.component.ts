import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductScope, ProductService} from "@spartacus/core";
import {RecentlyViewedService} from "./store/recently-viewed.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'recently-viewed-products',
  templateUrl: './recently-viewed-products.component.html',
  styleUrls: ['./recently-viewed-products.component.scss']
})
export class RecentlyViewedProductsComponent {
  recentlyViewed$: Observable<string[]>
  productService: ProductService;
/*  items$: Observable<Observable<Product>[]> = this.recentlyViewedService.recentlyViewed$.pipe(
    map(codes => {
      codes.map(code => this.productService.get(code, ProductScope.LIST))
    })
  );*/

  constructor(private recentlyViewedService: RecentlyViewedService, productService: ProductService) {
    this.productService = productService;
    this.recentlyViewed$ = recentlyViewedService.recentlyViewed$;
  }

}
