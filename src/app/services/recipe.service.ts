import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { RecipeListItem } from '../model/recipe-list-item.model';
import 'rxjs/add/operator/map'

@Injectable()
export class RecipeService {

  apiURL : string = 'https://private-54ba6-cookbook7.apiary-mock.com/';

  constructor(private http: Http) {

  }

  getRecipe(id:number): Observable<Recipe> {
    return this.http.get(this.apiURL+'recipe/'+id)
      .map( res => {
          var item = res.json();
          var recipe : Recipe = new Recipe();
          recipe.name=item.name;
          recipe.description=item.description;
          recipe.mainPicture=item.mainPicture;
          recipe.pictures=item.pictures;
          recipe.ingredients=item.ingredients;
          recipe.directions=item.directions;
          return recipe;
      });
  }

  getRecipeItems(): Observable<RecipeListItem[]> {
    return this.http.get(this.apiURL+'recipes')
      .map( res => {
        return res.json().map( it=>{
          var item = new RecipeListItem();
          item.id=it.id;
          item.name=it.name;
          item.rating=it.rating;
          item.description=it.description;
          item.picture=it.picture;
          return item;
          });
      });
  }

}
