import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoLogoutComponent} from "./auto-logout.component";
import {OutletRefModule} from "@spartacus/storefront";


@NgModule({
  declarations: [AutoLogoutComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [AutoLogoutComponent]
})
export class AutoLogoutModule {
}
