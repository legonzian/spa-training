export const RECENTLY_VIEWED_FEATURE = 'recentlyViewed';

export interface RecentlyViewedState {
  recentlyViewed?: string[];
}

export interface StateWithRecentlyViewed {
  [RECENTLY_VIEWED_FEATURE]: RecentlyViewedState;
}
