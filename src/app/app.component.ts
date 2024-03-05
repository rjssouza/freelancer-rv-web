import { Component } from '@angular/core';
import { ComponentBase } from './base/view.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends ComponentBase {
  constructor() {
    super('app-root');
  }
}
