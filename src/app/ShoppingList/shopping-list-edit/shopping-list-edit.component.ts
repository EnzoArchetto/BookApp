import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppinglistService: ShoppingListService) { }
  @ViewChild("form", { static: false }) form: NgForm;
  editMode = false;
  editedItemIndex: number;
  itemEdited: Ingredient;

  ngOnInit() {
    this.shoppinglistService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.itemEdited = this.shoppinglistService.GetIngredient(index);
      this.form.setValue({
        "name": this.itemEdited.name,
        "amount": this.itemEdited.amount
      });
    })
  }

  onSubmit(form: NgForm) {
    let ingredient: Ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppinglistService.UpdateIngredient(this.editedItemIndex, ingredient);
    }
    else {
      this.shoppinglistService.AddIngredient(ingredient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppinglistService.DeleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
