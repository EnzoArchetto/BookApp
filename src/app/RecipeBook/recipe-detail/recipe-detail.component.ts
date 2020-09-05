import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from "../recipes/recipe.model"
import { RecipeService } from '../recipes/recipe.service';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipeItem: Recipe;
    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params:Params) => {
            this.recipeItem = this.recipeService.GetRecipe((+params["id"] - 1));
        })
    }

    AddToShoppingList() {
        this.recipeService.AddToShoppingList(this.recipeItem.ingredients);
    }

    OnEditRecipe() {
        this.router.navigate(["edit"], {relativeTo: this.route });
        this.route.params.subscribe((params:Params) => {
            this.router.navigate(["edit"], {relativeTo: this.route });
        })
    }

    onDeleteRecipe() {
        this.route.params.subscribe((params:Params) => {
            this.recipeService.DeleteRecipe((+params["id"] - 1));
            this.router.navigate(["/recipes"]);
        })
    }
}