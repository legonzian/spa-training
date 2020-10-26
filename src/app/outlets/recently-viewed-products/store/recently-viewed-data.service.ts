import {Injectable} from "@angular/core";
import {WindowRef} from "@spartacus/core";

const RECENTLY_VIEWED_KEY = 'recently-viewed-data';

@Injectable({
  providedIn: 'root'
})
export class RecentlyViewedDataService {
  constructor(private winRef: WindowRef) {
  }

  getRecentlyViewed(): string[] {
    if (this.winRef.localStorage) {
      const data = this.winRef.localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
        }
      }
    }
    return [];
  }

  setRecentlyViewed(products: string[]) {
    if (this.winRef.localStorage) {
      this.winRef.localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(products));
    }
  }

  addToRecentlyViewed(product: string) {
    const recentlyViewed = this.getRecentlyViewed();
    if (recentlyViewed.indexOf(product) === -1) {
      recentlyViewed.push(product)
      this.setRecentlyViewed(recentlyViewed);
    }
  }
}
