import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {RECENTLY_VIEWED_FEATURE, RecentlyViewedState, StateWithRecentlyViewed} from "./recently-viewed.state";

export const getRecentlyViewedState: MemoizedSelector<StateWithRecentlyViewed, RecentlyViewedState>
  = createFeatureSelector<RecentlyViewedState>(RECENTLY_VIEWED_FEATURE);

export const getRecentlyViewed: MemoizedSelector<StateWithRecentlyViewed, string[]>
  = createSelector(getRecentlyViewedState, (state: RecentlyViewedState) => state.recentlyViewed);
