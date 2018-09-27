import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// //model di deklarasi dengan array 

recipes: Recipe[] = [
  new Recipe('Ketoprak',
  'Makanan dengan paduan lontong dan sambal kacang', 'https://craftlog.com/m/i/5215071=s1280=h960')
]; 
  constructor() { }

  ngOnInit() {
  }

}
