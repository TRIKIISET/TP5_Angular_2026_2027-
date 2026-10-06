import { Component, model, output } from '@angular/core';
import { Training } from '../training';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-training-detail',
  styleUrl: './training-detail.css',
  templateUrl: './training-detail.html',
})
export class TrainingDetail {
  formation = model.required<Training>();
  deletedTraining = output<Training>();
  onFreeChange(){
    this.formation.update(f=>({...f,isFree:!f.isFree}))
  }
    deleteTraining = output<Training>();
  onDelete(){
    this.deleteTraining.emit(this.formation())
  }
}
