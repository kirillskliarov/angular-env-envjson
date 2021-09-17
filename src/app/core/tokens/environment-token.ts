import {InjectionToken} from "@angular/core";
import {Environment} from "../interfaces/environment";

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('ENVIRONMENT');
