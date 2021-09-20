import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Environment } from "./app/core/interfaces/environment";
import { Env } from "./app/core/namespaces/Env";

(async () => {
  try {
    const response: Response = await fetch('/env.json');
    const env: Promise<Environment> = await response.json();
    Env.environment = (await env);

    if ((await env).production) {
      enableProdMode();
    }

    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error(err);
  }
})();
