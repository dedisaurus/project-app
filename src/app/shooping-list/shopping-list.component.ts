import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredient: ingredients[]= [
   new ingredients('Lontong', 4),
   new ingredients('kacang', 10),
   new ingredients('tauge', 12)
 ];
  constructor() { }

  ngOnInit() {
  }

}
