import { Component, input, model, output } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [DecimalPipe, FormsModule],
  selector: 'app-pizza-item',
  styleUrl: './pizza-item.css',
  templateUrl: './pizza-item.html',
})
export class PizzaItem {
  pizza = input.required<Pizza>()
}
