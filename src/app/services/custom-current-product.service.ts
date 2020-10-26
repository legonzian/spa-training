import {Injectable} from "@angular/core";
import {Product, ProductScope, ProductService, RoutingService} from "@spartacus/core";
import {Observable} from "rxjs";
import {CurrentProductService} from "@spartacus/storefront";
import {map} from "rxjs/operators";
import {RecentlyViewedService} from "../outlets/recently-viewed-products/store/recently-viewed.service";

@Injectable({
  providedIn: 'root'
})
export class CustomCurrentProductService extends CurrentProductService {
  recentlyViewedService: RecentlyViewedService;

  constructor(routingService: RoutingService, productService: ProductService, recentlyViewedService: RecentlyViewedService) {
    super(routingService, productService);
    this.recentlyViewedService = recentlyViewedService;
  }

  getProduct(scopes?: (ProductScope | string)[] | ProductScope | string): Observable<Product | null> {
    return super.getProduct(scopes)
      .pipe(
        map(product => {
          this.recentlyViewedService.add(product.code);
          return product;
        })
      );
  }
}
