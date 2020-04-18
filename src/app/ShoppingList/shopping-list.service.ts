import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 10)
    ]
    shoppinglistEmitter = new EventEmitter<Ingredient[]>();

    GetIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppinglistEmitter.emit(this.ingredients.slice());
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppinglistEmitter.emit(this.ingredients.slice());
    }
}