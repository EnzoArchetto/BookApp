import { Component, Input } from '@angular/core';
import { Recipe } from "../recipes/recipe.model"
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from 'src/app/ShoppingList/shopping-list.service';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent
{
    @Input() recipeItem:Recipe;
    constructor(private recipeService: RecipeService) { }

    AddToShoppingList() {
        this.recipeService.AddToShoppingList(this.recipeItem.ingredients);
    }
}