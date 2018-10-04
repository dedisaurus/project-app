import {
  ingredients
} from './../../shared/ingredient.model';
import {
  element
} from 'protractor';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef
  // @Output() ingredientAdded = new EventEmitter<ingredients>();
  constructor(private slService: shoppingListService) {
     
  }

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredients(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
