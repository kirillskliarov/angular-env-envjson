import { InjectionToken } from "@angular/core";
import { Environment } from "../interfaces/environment";
import {envStorage} from "../../../env-storage";

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('ENVIRONMENT', {
  providedIn: 'root',
  factory: () => {
    const env: Environment = envStorage.getValue() as Environment;
    envStorage.complete();

    return env;
  },
});
