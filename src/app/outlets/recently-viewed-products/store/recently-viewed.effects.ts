import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {LoadRecentlyViewedSuccess, RecentlyViewedActions, RecentlyViewedActionTypes} from "./recently-viewed.actions";
import {RecentlyViewedDataService} from "./recently-viewed-data.service";
import {map, tap} from "rxjs/operators";

@Injectable()
export class RecentlyViewedEffects {
  @Effect()
  loadRecentlyViewed$ = this.actions$.pipe(
    ofType(RecentlyViewedActionTypes.LoadRecentlyViewed),
    map(() => {
      const recentlyViewed = this.recentlyViewedDataService.getRecentlyViewed();
      return new LoadRecentlyViewedSuccess(recentlyViewed);
    })
  );

  @Effect({dispatch: false})
  addRecentlyViewed$ = this.actions$.pipe(
    ofType(RecentlyViewedActionTypes.AddRecentlyViewed),
    tap(action => this.recentlyViewedDataService.addToRecentlyViewed(action.payload))
  );

  constructor(private actions$: Actions<RecentlyViewedActions>, private recentlyViewedDataService: RecentlyViewedDataService) {
  }
}
