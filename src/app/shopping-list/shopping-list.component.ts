import { Component } from '@angular/core';
import { ComponentBase } from '../base/view.base';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent extends ComponentBase {
  constructor() {
    super('app-shopping-list');
  }
}
