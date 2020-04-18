import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
import { RecipeService } from '../recipes/recipe.service';
@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent
{
    @Input() recipeItem:Recipe;
    constructor(private recipeService: RecipeService) { }
    OnSetDetail() {
        this.recipeService.recipeEmitter.emit(this.recipeItem);
    }
}