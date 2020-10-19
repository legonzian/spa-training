import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {translations, translationChunksConfig} from '@spartacus/assets';
import {B2cStorefrontModule} from '@spartacus/storefront';
import {environment} from "../environments/environment";
import {OutletsModule} from "./outlets/outlets.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.baseUrl ? environment.baseUrl : 'https://localhost:9002',
          prefix: environment.occPrefix ? environment.occPrefix : '/rest/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      },
    }),
    OutletsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
