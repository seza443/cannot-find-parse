import { Component } from '@angular/core';
import {Parse} from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    this.initParse();
  }

  private initParse() {
    Parse.initialize("app id");
    Parse.serverURL = "app url";
  }
}
