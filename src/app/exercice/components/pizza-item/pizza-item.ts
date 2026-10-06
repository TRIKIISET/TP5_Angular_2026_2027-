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
  pizza = model.required<Pizza>()
  display=signal<boolean>(false);
  deletePizza=output<number>();
  onRemoveComment(id:number){
    this.pizza.update(p=>{
      return {...p, comments: p.comments?.filter(c=> c.id!=id)}
    })
  }
  updateDisplay(){
    this.display.update(v=>!v)
  }
  onDeletePizza(){
    this.deletePizza.emit(this.pizza().id)
  }
}
