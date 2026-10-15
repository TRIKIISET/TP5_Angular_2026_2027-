import { Component, input, model, output, signal } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaComment } from '../pizza-comment/pizza-comment';

@Component({
  imports: [DecimalPipe, PizzaComment],
  selector: 'app-pizza-item',
  styleUrl: './pizza-item.css',
  templateUrl: './pizza-item.html',
})
export class PizzaItem {
   pizza = input.required<Pizza>() 
  display=signal<boolean>(false);
  deletePizza=output<number>();
  pizzaChange=output<Pizza>(); /* pour la mise à jour de la pizza après suppression d'un commentaire */


  updateDisplay(){
    this.display.update(v=>!v)
  }
  onDeletePizza(){
    this.deletePizza.emit(this.pizza().id)
  }

  onRemoveComment(id:number){
    const updatedPizza={...this.pizza(), comments: this.pizza().comments?.filter(c=> c.id!=id)}
    this.pizzaChange.emit(updatedPizza)
  }
}
