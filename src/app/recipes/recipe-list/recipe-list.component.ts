import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// //model di deklarasi dengan array 
// recipes: Recipe[] = [
//   new Recipe('Ketoprak',
//   'Makanan dengan paduan lontong dan sambal kacang', 'https://craftlog.com/m/i/5215071=s1280=h960'),
//   new Recipe('Nasi Goreng',
//   'Makanan yang terbuat dari nasi digoreng dengan bermacam toping seperti ayam dan keju',
//   'http://3.bp.blogspot.com/-b8rz5ueUyjs/VeQr6NohCcI/AAAAAAAAAes/9jFL14WzvCE/s320/nasi-goreng-seafood-spesial.jpg')
// ]; 
recipes: Recipe[] ;

// @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
