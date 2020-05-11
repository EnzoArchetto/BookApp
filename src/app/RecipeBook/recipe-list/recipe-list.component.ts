import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) { }

  recipes:Recipe[] = [];

  NewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  ngOnInit() {
    this.recipes = this.recipesService.GetRecipes();
  }
}
