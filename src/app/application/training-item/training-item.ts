import { Component, input } from '@angular/core';
import { Training } from '../training';


@Component({
  imports: [],
  selector: 'app-training-item',
  styleUrl: './training-item.css',
  templateUrl: './training-item.html',
})
export class TrainingItem {
  training = input.required<Training>();
  indice = input.required<number>({alias:'position'});

}
