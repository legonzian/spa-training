import {Injectable} from '@angular/core';
import {BREAKPOINT, PageLayoutHandler} from "@spartacus/storefront";
import {Observable, combineLatest, of} from "rxjs";
import {ActiveCartService, Cart, SelectiveCartService} from "@spartacus/core";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GlobalPageLayoutHandler implements PageLayoutHandler {
  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService
  ) {
  }

  handle(
    slots$: Observable<string[]>,
    pageTemplate?: string,
    section?: string,
    breakpoint?: BREAKPOINT
  ): Observable<string[]> {
    return section !== 'header'
      ? slots$
      : combineLatest([
        slots$,
        this.activeCartService.getActive(),
        this.selectiveCartService.isEnabled()
          ? this.selectiveCartService.getCart()
          : of({} as Cart),
        this.activeCartService.getLoading()
      ])
        .pipe(
          map(([slots, cart, selectiveCart, loadingCart]) => {
            const exclude = (arr, args) => arr.filter(item => args.every(arg => arg !== item));

            return Object.keys(cart).length === 0 && loadingCart
              ? slots
              : cart.totalItems
                ? slots
                : selectiveCart.totalItems
                  ? slots
                  : exclude(slots, ['MiniCart'])
          })
        );
  }


}
