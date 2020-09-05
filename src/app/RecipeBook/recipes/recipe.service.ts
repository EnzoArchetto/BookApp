import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/ShoppingList/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza',
            'Pizza margherita',
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
            [
                new Ingredient("pomodoro", 5),
                new Ingredient("mozzarella", 3),
                new Ingredient("pasta di pane", 1)
            ])
    ]
    RecipeChanged = new Subject<Recipe[]>();

    constructor(private shoppinglistService: ShoppingListService) { }

    GetRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    GetRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    AddToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.AddIngredients(ingredients);
    }

    AddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.RecipeChanged.next(this.recipes.slice());
    }

    UpdateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.RecipeChanged.next(this.recipes.slice());
    }

    DeleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.RecipeChanged.next(this.recipes.slice());
    }
}