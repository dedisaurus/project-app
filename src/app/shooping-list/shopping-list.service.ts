import { EventEmitter } from '@angular/core';
import { ingredients } from './../shared/ingredient.model';

export class shoppingListService{
    ingredientsChanged = new EventEmitter<ingredients[]>();
    //event diatas adalah we can emit our ingredient array so it will pass on array of ingredients
    //istilahnya dia menginject ingredients array dengan data baru
 private ingredient: ingredients[]= [
        new ingredients('Lontong', 4),
        new ingredients('kacang', 10),
        new ingredients('tauge', 12)
      ];

      getIngredients(){
          return this.ingredient.slice();
          // return this.ingredient.slice(); ini cigunakan untuk 
          //untuk menampilkan data ketika kita tambha data data yg kita tambah ga nampil
      }

      addIngredient(ingredient: ingredients ){
        this.ingredient.push(ingredient);
        this.ingredientsChanged.emit(this.ingredient.slice());
      }
      addIngredientsToRecipe(ingredientnew: ingredients[]){
        this.ingredient.push(...ingredientnew);
        this.ingredientsChanged.emit(this.ingredient.slice());
      }
}

//allows us to basically turn an array of elements into a list of element
//push : it is not able to handle an araray or to be precise it can hendle
//an array but then it would push this array as a single object to the array