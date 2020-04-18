import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  @ViewChild("NameInput", {static: false }) name: ElementRef;
  @ViewChild("AmountInput", {static: false }) amount: ElementRef;

  SaveItem() {
     this.shoppinglistService.AddIngredient(new Ingredient(this.name.nativeElement.value, <number>this.amount.nativeElement.value));
  }
}
