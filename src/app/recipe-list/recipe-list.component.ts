import { Component, OnInit } from '@angular/core';
import { RecipeListItem } from '../model/recipe-list-item.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {

  items:Array<RecipeListItem>;
  _recipeService : RecipeService;

  constructor(_recipeService:RecipeService) {
  this._recipeService=_recipeService;
  }

  ngOnInit() {
  this._recipeService.
    getRecipeItems().
      subscribe(items => this.items = items);
  }

}
