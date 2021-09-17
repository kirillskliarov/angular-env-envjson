import {Environment} from "../interfaces/environment";
import {envStorage} from "../../../env-storage";

export function environmentFactory(): Environment {
  const env: Environment = envStorage.getValue() as Environment;
  envStorage.complete();

  return env;
}
