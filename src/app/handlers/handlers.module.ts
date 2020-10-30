import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PAGE_LAYOUT_HANDLER} from "@spartacus/storefront";
import {GlobalPageLayoutHandler} from "./global-page-layout.handler";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: GlobalPageLayoutHandler,
      multi: true,
    },
  ],
})
export class HandlersModule { }
