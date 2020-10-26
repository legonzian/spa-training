import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {RECENTLY_VIEWED_FEATURE} from "./recently-viewed.state";
import {reducer} from "./recently-viewed.reducer";
import {RecentlyViewedEffects} from "./recently-viewed.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RECENTLY_VIEWED_FEATURE, reducer),
    EffectsModule.forFeature([RecentlyViewedEffects])
  ]
})
export class RecentlyViewedModule {
}
