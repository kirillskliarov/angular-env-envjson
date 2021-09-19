import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EnvStorageService } from "./core/services/env-storage.service";
import { ENVIRONMENT_TOKEN } from "./core/tokens/environment-token";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (envStorageService: EnvStorageService) => {
        return () => {
          return envStorageService.init();
        };
      },
      deps: [EnvStorageService],
    },
    {
      provide: ENVIRONMENT_TOKEN,
      useFactory: (envStorageService: EnvStorageService) => {
        return envStorageService.getEnv();
      },
      deps: [EnvStorageService],
    },
  ],
})
export class AppModule {
}
