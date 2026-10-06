import { Component, input, output, model } from '@angular/core';
import { Training } from '../training';


@Component({
  imports: [],
  selector: 'app-training-item',
  styleUrl: './training-item.css',
  templateUrl: './training-item.html',
})
export class TrainingItem {
  // training = input.required<Training>();
  training = model.required<Training>();
  // position = input.required<number>();  
  indice = input.required<number>({alias:'position'});

  deleteTraining = output<number>();
  onDelete(){
    this.deleteTraining.emit(this.training().id)
  }
  onFreeChange(){
   this.training.update(formation=>({...formation, isFree: !formation.isFree}))
  }

}
