import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigModule, RoutingConfig} from "@spartacus/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          search: {
            paths: ['s/:query', 'search/:query']
          },
          product: {
            paths: [
              'p/:productCode/:name',
              'product/:productCode/:name',
              'p/:productCode',
              'product/:productCode'
            ],
            paramsMapping: {productCode: 'code'},
          }
        }
      }
    } as RoutingConfig)
  ]
})
export class RoutingConfigModule {
}
