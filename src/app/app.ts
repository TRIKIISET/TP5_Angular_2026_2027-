import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainingList } from './application/training-list/training-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrainingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP5');
}
