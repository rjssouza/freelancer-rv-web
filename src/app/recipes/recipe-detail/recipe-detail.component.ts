import { Component } from '@angular/core';
import { ComponentBase } from '../../base/view.base';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent extends ComponentBase {
  constructor() {
    super('app-recipe-detail');
  }
}
