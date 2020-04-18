import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipeService) { }

  recipes:Recipe[] = [];

  AddRecipe(): void {
    let r: Recipe = new Recipe("a", "b", "c", []);
    r.name = "aa";
    r.description = "dsd";
    this.recipes.push(r);
  }

  ngOnInit() {
    this.recipes = this.recipesService.GetRecipes();
  }
}
