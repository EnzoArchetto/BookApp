import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent
{
    @Input() recipeItem:Recipe;
    @Output() setDetail: EventEmitter<void> = new EventEmitter<void>();

    OnSetDetail() {
        this.setDetail.emit();
    }
}