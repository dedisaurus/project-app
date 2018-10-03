import { ingredients } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { shoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
//  ingredient: ingredients[]= [
//    new ingredients('Lontong', 4),
//    new ingredients('kacang', 10),
//    new ingredients('tauge', 12)
//  ];
ingredient: ingredients[];

  constructor(private slSErvice : shoppingListService) { }

  ngOnInit() {
    this.ingredient = this.slSErvice.getIngredients();
    this.slSErvice.ingredientsChanged
    .subscribe(
      (ingredient: ingredients[]) =>{
        this.ingredient = ingredient;
      }
    );
  }
 //
  // onIngredientAdded(ingredient: ingredients){
  //   this.ingredient.push(ingredient);

  // }
}
