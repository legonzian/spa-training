import {Action} from "@ngrx/store";


export enum RecentlyViewedActionTypes {
  LoadRecentlyViewed = '[RecentlyViewed] Load products',
  LoadRecentlyViewedSuccess = '[RecentlyViewed] Load products success',
  AddRecentlyViewed = '[RecentlyViewed] Add product'
}

export class LoadRecentlyViewed implements Action {
  readonly type = RecentlyViewedActionTypes.LoadRecentlyViewed;
}

export class LoadRecentlyViewedSuccess implements Action {
  readonly type = RecentlyViewedActionTypes.LoadRecentlyViewedSuccess;

  constructor(public payload: string[]) {
  }
}

export class AddRecentlyViewed implements Action {
  readonly type = RecentlyViewedActionTypes.AddRecentlyViewed;

  constructor(public payload: string) {
  }
}

export type RecentlyViewedActions =
  | LoadRecentlyViewed
  | LoadRecentlyViewedSuccess
  | AddRecentlyViewed;
