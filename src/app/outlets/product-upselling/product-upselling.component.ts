import {Component} from '@angular/core';
import {CurrentProductService} from "@spartacus/storefront";
import {Product, ProductScope, ProductSearchPage, ProductSearchService, ProductService} from "@spartacus/core";
import {map, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'product-upselling',
  templateUrl: './product-upselling.component.html',
  styleUrls: ['./product-upselling.component.scss']
})
export class ProductUpsellingComponent {
  private productSearchPage$: Observable<ProductSearchPage>;
  public products$: Observable<Product[]>;
  public correct$: Observable<Observable<Product>[]>
  public searchResult$: any;

  constructor(currentProductService: CurrentProductService, productSearchService: ProductSearchService, productService: ProductService) {
    this.productSearchPage$ = currentProductService.getProduct()
      .pipe(
        map(product => product.name),
        map(name => productSearchService.search(name)),
        switchMap(() => productSearchService.getResults())
      );

    this.products$ = this.productSearchPage$.pipe(
      map(productSearchPage => {
        return productSearchPage.products
      })
    )

    this.correct$ = this.products$.pipe(
      map(products => {
        return products.map(product => productService.get(product.code, ProductScope.LIST))
      })
    );

    this.searchResult$ = currentProductService.getProduct()
      .pipe(
        map(product => product.name),
        map(name => productSearchService.search(name)),
        switchMap(() => productSearchService.getResults()
          .pipe(
            map(productSearchPage => {
              return productSearchPage.products
            }),
            map(products =>
              products.map(product => of(product))
            )
          )
        )
      );
  }
}

