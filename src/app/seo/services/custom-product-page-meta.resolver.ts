import {Injectable} from "@angular/core";
import {
  Product,
  ProductPageMetaResolver,
  ProductScope,
  ProductService,
  RoutingService,
  TranslationService
} from "@spartacus/core";
import {Observable} from "rxjs";
import {filter, map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CustomProductPageMetaResolver extends ProductPageMetaResolver {

  constructor(
    routingService: RoutingService,
    productService: ProductService,
    translation: TranslationService
  ) {
    super(routingService, productService, translation);
  }

  protected product$ = this.routingService.getRouterState().pipe(
    map((state) => state.state.params['productCode']),
    filter((code) => !!code),
    switchMap((code) => this.productService.get(code, ProductScope.DETAILS)),
    filter(Boolean)
  );

  resolveTitle(): Observable<string> {
    return this.product$.pipe(
      switchMap((p: Product) => {
        let title = p.name;
        title += this.resolvePrice(p);
        title += super.resolveFirstCategory(p);
        title += super.resolveManufacturer(p);
        return this.translation.translate('pageMetaResolver.product.title', {
          title: title,
        })
      })
    )
  }

  protected resolvePrice(p: Product) {
    return p.price ? ` | ${p.price.formattedValue}` : '';
  }
}
