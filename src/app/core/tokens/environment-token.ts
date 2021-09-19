import { InjectionToken } from "@angular/core";
import { Environment } from "../interfaces/environment";
import { Env } from "../namespaces/Env";

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('ENVIRONMENT', {
  providedIn: 'root',
  factory: () => Env.environment,
});
