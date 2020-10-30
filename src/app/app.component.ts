import {Component, Inject} from '@angular/core';
import {Config} from "@spartacus/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spa-training';

  constructor(@Inject(Config) config) {
    console.log(config);
  }
}
