import { Component, model } from '@angular/core';
import { Training } from '../application/training';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-training-detail',
  styleUrl: './training-detail.css',
  templateUrl: './training-detail.html',
})
export class TrainingDetail {
  formation = model.required<Training>();
  onFreeChange(){
    this.formation.update(f=>({...f,isFree:!f.isFree}))
  }
}
