import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigModule} from "@spartacus/core";
import {LayoutConfig} from "@spartacus/storefront";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          lg: {
            slots: [
              'NavigationBar',
              'SiteLinks',
              'SiteLogo',
              'SearchBox',
              'MiniCart',
              'SiteLogin',
              'SiteContext',
            ],
          }
        },
        SearchResultsListPageTemplate: {
          lg: {
            slots: [
              'Section2',
              'ProductLeftRefinements',
              'SearchResultsListSlot',
            ]
          },
          slots: [
            'ProductLeftRefinements',
            'SearchResultsListSlot',
          ]
        },
        ProductDetailsPageTemplate: {
          slots: [
            'Summary',
            'UpSelling',
            'CrossSelling',
            'SiteLinks',
            'PlaceholderContentSlot',
          ]
        }
      }
    } as LayoutConfig)
  ]
})
export class LayoutConfigModule {
}
