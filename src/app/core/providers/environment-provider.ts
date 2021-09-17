import {FactoryProvider} from "@angular/core";
import {ENVIRONMENT_TOKEN} from "../tokens/environment-token";
import {environmentFactory} from "../factories/environment-factory";
import {GLOBAL_TOKEN} from "../tokens/global-token";

export const environmentProvider: FactoryProvider = {
  provide: ENVIRONMENT_TOKEN,
  useFactory: environmentFactory,
  deps: [GLOBAL_TOKEN],
}
