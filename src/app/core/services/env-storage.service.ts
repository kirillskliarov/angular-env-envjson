import { Injectable } from '@angular/core';
import { Environment } from "../interfaces/environment";
import { Observable, ReplaySubject } from "rxjs";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnvStorageService {
  private static readonly envBuffer$: ReplaySubject<Environment> = new ReplaySubject<Environment>(1);
  private static env: Environment;

  public static setEnv(env: Environment): void {
    EnvStorageService.envBuffer$.next(env);
  }

  constructor() {
  }

  public init(): Observable<Environment> {
    const result: Observable<Environment> = EnvStorageService.envBuffer$
      .asObservable()
      .pipe(
        take(1),
        tap((env: Environment) => EnvStorageService.env = env),
      )
      // .toPromise()
    ;
    EnvStorageService.envBuffer$.complete();

    return result;
  }

  public getEnv(): Environment {
    return EnvStorageService.env;
  }
}
