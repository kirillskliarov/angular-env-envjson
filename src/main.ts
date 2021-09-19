import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Environment } from "./app/core/interfaces/environment";
import { EnvStorageService } from "./app/core/services/env-storage.service";

(async function() {
  try {
    const response: Response = await fetch('/env.json');
    const env: Promise<Environment> = await response.json();
    EnvStorageService.setEnv(await env);

    if ((await env).production) {
      enableProdMode();
    }

    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error(err);
  }
})();
