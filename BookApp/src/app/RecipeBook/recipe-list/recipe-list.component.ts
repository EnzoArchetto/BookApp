import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Description Recipe', 'https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg')
  ]
  constructor() { }
  
  
  AddRecipe():void
  {
    let r:Recipe = new Recipe("a", "b", "c");
    r.name = "aa";
    r.description = "dsd";
    this.recipes.push(r);
  }

  ngOnInit() {
  }

}
