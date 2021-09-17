import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {globalProvider} from "./core/providers/global-provider";
import {environmentProvider} from "./core/providers/environment-provider";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    globalProvider,
    environmentProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
