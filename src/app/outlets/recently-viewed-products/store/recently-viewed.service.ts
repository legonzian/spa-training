import {Injectable} from "@angular/core";
import {Observable, queueScheduler} from "rxjs";
import {getRecentlyViewed} from "./recently-viewed.selectors";
import {select, Store} from "@ngrx/store";
import {filter, observeOn, tap} from "rxjs/operators";
import {AddRecentlyViewed, LoadRecentlyViewed} from "./recently-viewed.actions";
import {StateWithRecentlyViewed} from "./recently-viewed.state";

@Injectable({
  providedIn: 'root'
})
export class RecentlyViewedService {

  recentlyViewed$: Observable<string[]> = this.store.pipe(
    select(getRecentlyViewed),
    observeOn(queueScheduler),
    tap(recentlyViewed => {
      if (!recentlyViewed) {
        this.store.dispatch(new LoadRecentlyViewed())
      }
    }),
    filter(list => !!list)
  );

  add(productCode: string): void {
    this.store.dispatch(new AddRecentlyViewed(productCode));
  }

  constructor(private store: Store<StateWithRecentlyViewed>) {
  }
}
