import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutConfigModule} from "./layout-config/layout-config.module";
import {RoutingConfigModule} from "./routing-config/routing-config.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutConfigModule,
    RoutingConfigModule
  ],
})
export class ConfigsModule {
}
