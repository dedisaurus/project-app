import { shoppingListService } from './../shooping-list/shopping-list.service';
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { ingredients } from "../shared/ingredient.model";

@Injectable()
//managing Recipe in recipe service
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
        new Recipe(
        'Ketoprak',
        'Makanan dengan paduan lontong dan sambal kacang',
        'https://craftlog.com/m/i/5215071=s1280=h960',[
            new ingredients('kerupuk',100),
            new ingredients('tahu',3)
        ]),
        new Recipe('Nasi Goreng',
        'Makanan yang terbuat dari nasi digoreng dengan bermacam toping seperti ayam dan keju',
        'http://3.bp.blogspot.com/-b8rz5ueUyjs/VeQr6NohCcI/AAAAAAAAAes/9jFL14WzvCE/s320/nasi-goreng-seafood-spesial.jpg',
        [
            new ingredients('kerupuk',50),
            new ingredients('terasi',3)
        ])
      ]; 

      constructor(private slService: shoppingListService){}

      getRecipe(){
          return this.recipes;
          //add slice untuk return new array which is an exact copy of the one
          // in diserves file
      }
      addIngredientsToShoppingList(ing: ingredients[]){
this.slService;
      }
}