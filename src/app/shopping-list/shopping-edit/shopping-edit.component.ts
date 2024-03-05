import { Component } from '@angular/core';
import { ComponentBase } from '../../base/view.base';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent extends ComponentBase {
  constructor() {
    super('app-shopping-edit');
  }
}
