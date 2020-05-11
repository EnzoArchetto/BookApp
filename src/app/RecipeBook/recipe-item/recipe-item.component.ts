import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
import { RecipeService } from '../recipes/recipe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipeItem: Recipe;
    @Input() recipeIndex: number;
    constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.recipeItem = this.recipeService.GetRecipe(this.recipeIndex);
    }
}