import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 10)
    ]
    shoppinglistEmitter = new Subject<Ingredient[]>();

    GetIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }
}