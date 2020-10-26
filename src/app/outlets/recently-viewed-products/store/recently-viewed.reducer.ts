import {RecentlyViewedActions, RecentlyViewedActionTypes} from "./recently-viewed.actions";
import {RecentlyViewedState} from "./recently-viewed.state";

export const initialState = {
  recentlyViewed: []
};

export function reducer(state = initialState, action: RecentlyViewedActions): RecentlyViewedState {
  switch (action.type) {
    case RecentlyViewedActionTypes.LoadRecentlyViewedSuccess:
      return {recentlyViewed: action.payload};
    case RecentlyViewedActionTypes.AddRecentlyViewed: {
      if (state.recentlyViewed.find(product => product === action.payload)) {
        return state;
      }
      return {recentlyViewed: [...state.recentlyViewed, action.payload]};
    }
    default:
      return state;
  }
}
