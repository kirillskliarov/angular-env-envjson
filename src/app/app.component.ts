import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ENVIRONMENT_TOKEN } from "./core/tokens/environment-token";
import { Environment } from "./core/interfaces/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(
    @Inject(ENVIRONMENT_TOKEN) public readonly env: Environment,
  ) {
  }
}
