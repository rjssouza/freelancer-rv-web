import { Component } from '@angular/core';
import { ComponentBase } from '../../base/view.base';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent extends ComponentBase {
  constructor() {
    super('app-recipe-list');
  }

}
