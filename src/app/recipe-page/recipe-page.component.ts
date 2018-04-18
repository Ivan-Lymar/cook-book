import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
  providers:[RecipeService]
})
export class RecipePageComponent implements OnInit {

  recipe : Recipe = new Recipe();
  recipeId : number;
  _recipeService: RecipeService

  constructor( _recipeService: RecipeService , _route:ActivatedRoute) {
    this.recipeId = _route.snapshot.params['recipeId'];
    this._recipeService=_recipeService;
  }

  ngOnInit() {
    this._recipeService.
    getRecipe( this.recipeId ).
    subscribe( recipe => this.recipe = recipe );
  }

}
