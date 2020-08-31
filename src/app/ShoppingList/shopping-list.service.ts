import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 10)
    ]
    shoppinglistEmitter = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    GetIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    GetIngredient(index:number) {
        return this.ingredients[index];
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }

    UpdateIngredient(index:number, newIngredient:Ingredient) {
        this.ingredients[index] = newIngredient;
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }

    DeleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.shoppinglistEmitter.next(this.ingredients.slice());
    }
}