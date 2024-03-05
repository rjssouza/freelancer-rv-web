import { Component } from '@angular/core';
import { ComponentBase } from '../base/view.base';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent extends ComponentBase {
  constructor() {
    super('app-recipes');
  }

}
