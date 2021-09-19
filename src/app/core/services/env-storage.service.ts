import { Injectable } from '@angular/core';
import { Environment } from "../interfaces/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvStorageService {
  private static env: Environment;

  public static setEnv(env: Environment): void {
    EnvStorageService.env = env;
  }

  constructor() {
  }

  public getEnv(): Environment {
    return EnvStorageService.env;
  }
}
