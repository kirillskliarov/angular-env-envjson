import {FactoryProvider} from "@angular/core";
import {ENVIRONMENT_TOKEN} from "../tokens/environment-token";
import {environmentFactory} from "../factories/environment-factory";

export const environmentProvider: FactoryProvider = {
  provide: ENVIRONMENT_TOKEN,
  useFactory: environmentFactory,
  deps: [],
}
