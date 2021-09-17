import {FactoryProvider} from "@angular/core";
import {GLOBAL_TOKEN} from "../tokens/global-token";
import {globalFactory} from "../factories/global-factory";

export const globalProvider: FactoryProvider = {
  provide: GLOBAL_TOKEN,
  useFactory: globalFactory,
  deps: [],
};
