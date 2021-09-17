import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {ENVIRONMENT_TOKEN} from "../../core/tokens/environment-token";
import {Environment} from "../../core/interfaces/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(ENVIRONMENT_TOKEN) public env: Environment,
  ) { }

  ngOnInit(): void {
  }

}
