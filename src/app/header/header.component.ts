import { Component } from '@angular/core';
import { ComponentBase } from '../base/view.base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent extends ComponentBase {
  constructor() {
    super('app-header');
  }
}
