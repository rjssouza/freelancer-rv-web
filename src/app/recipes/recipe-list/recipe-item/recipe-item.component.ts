import { Component } from '@angular/core';
import { ComponentBase } from '../../../base/view.base';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent extends ComponentBase {
  constructor() {
    super('app-recipe-item');
  }

}
