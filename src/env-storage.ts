import { BehaviorSubject } from "rxjs";
import { Environment } from "./app/core/interfaces/environment";

export const envStorage: BehaviorSubject<Environment | null> =
  new BehaviorSubject<Environment| null>(null);
