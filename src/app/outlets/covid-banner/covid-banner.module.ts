import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovidBannerComponent} from "./covid-banner.component";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [CovidBannerComponent],
  exports: [
    CovidBannerComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule
  ]
})
export class CovidBannerModule {
}
