import { Component, OnInit, Input } from '@angular/core';
import { RecipeListItem } from '../model/recipe-list-item.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() item : RecipeListItem;

  fullStarCount:Array<number>=[];
  semiStarCount:Array<number>=[];
  emptyStarCount:Array<number>=[];

  constructor() {
  }

  ngOnInit() {
    this.calculateStars(this.item);
  }

   calculateStars(item : RecipeListItem):void {
    var rating = item.rating;
    while( rating>0 ){
      if( rating<1 ){
        this.semiStarCount.push(1);
      } else {
        this.fullStarCount.push(1);
      }
      rating = rating-1;
    }

    for(var i =0;i<5-this.fullStarCount.length-this.semiStarCount.length;i++){
    this.emptyStarCount.push(1);
    }
  }

}
