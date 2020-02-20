import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() SaveItemEvent: EventEmitter<{name: string, amount:number}> = new EventEmitter<{name: string, amount:number}>(); 
  constructor() { }

  ngOnInit() {
  }

  @ViewChild("NameInput", {static: false }) name: ElementRef;
  @ViewChild("AmountInput", {static: false }) amount: ElementRef;

  SaveItem() {
     this.SaveItemEvent.emit({ name: this.name.nativeElement.value, amount: <number>this.amount.nativeElement.value });
  }
}
