import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ENVIRONMENT_TOKEN} from "./core/tokens/environment-token";
import {environmentFactory} from "./core/factories/environment-factory";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useFactory: environmentFactory,
      deps: [],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
