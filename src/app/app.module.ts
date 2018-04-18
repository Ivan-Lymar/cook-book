import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: 'recipe/:recipeId',
    component: RecipePageComponent
  },
    {
      path: '**',
      component: RecipePageComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    RecipeListComponent,
    RecipeListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
