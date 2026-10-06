import { Component, signal } from '@angular/core';
import { TrainingList } from './application/training-list/training-list';
import { PizzaList } from './exercice/components/pizza-list/pizza-list';

@Component({
  selector: 'app-root',
  imports: [ TrainingList, PizzaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP5');
}
