import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params["id"] as number;
      this.editMode = params["id"] != null;
      console.log(this.id);
    })
  }
}
