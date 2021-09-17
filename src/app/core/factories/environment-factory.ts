import {Environment} from "../interfaces/environment";

declare global {
  interface Window {
    __env: Environment;
  }
}

export function environmentFactory(global: Window) {
  return global.__env;
}
