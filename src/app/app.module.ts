import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {B2cStorefrontModule} from '@spartacus/storefront';
import {environment} from "../environments/environment";
import {OutletsModule} from "./outlets/outlets.module";
import {DeferLoadingStrategy} from "@spartacus/core";
import {ConfigsModule} from "./configs/configs.module";
import {HandlersModule} from "./handlers/handlers.module";
import {CmsComponentsModule} from "./cms-components/cms-components.module";
import {SeoModule} from "./seo/seo.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    OutletsModule,
    ConfigsModule,
    HandlersModule,
    CmsComponentsModule,
    SeoModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.baseUrl ? environment.baseUrl : 'https://localhost:9002',
          prefix: environment.occPrefix ? environment.occPrefix : '/rest/v2/'
        }
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      },
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER
      }
    }),
    BrowserTransferStateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
