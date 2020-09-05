import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(private recipesService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) { }

  recipes: Recipe[] = [];
  recipeSubscr: Subscription

  NewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  ngOnInit() {
    this.recipeSubscr = this.recipesService.RecipeChanged.subscribe((recipes:Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipesService.GetRecipes();
  }
  
  ngOnDestroy() {
    this.recipeSubscr.unsubscribe();
  }
}
