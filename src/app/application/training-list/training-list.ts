import { Component, effect, signal } from '@angular/core';
import { Training } from '../training';
import { TrainingItem } from '../training-item/training-item';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingDetail } from '../training-detail/training-detail';

@Component({
  imports: [TrainingItem, TrainingDetail, JsonPipe, FormsModule,],
  selector: 'app-training-list',
  styleUrl: './training-list.css',
  templateUrl: './training-list.html',
})
export class TrainingList {

  trainingCatalog = signal<Training[]>([
    { id:125,name: 'Introduction à Angular', nbDays: 3, isFree: false },
    { id:587,name: 'Grid & Flexbox', nbDays: 3, isFree: true },
    { id: 879,name: 'Node JS avancé', nbDays: 4, isFree: false },
    { id:859,name: 'HTML5 & CSS', nbDays: 2, isFree: true }
  ])
  addTraining() {
    const formation: Training = {
      id:Math.floor(Math.random()*1000),
      name: 'JS pour les experts',
      nbDays: 2,
      isFree: true,
    };
    this.trainingCatalog.update((trainings) => [...trainings, formation]);
  }

  constructor() {
    effect(() => {
      console.log(this.trainingCatalog())
    })
  }

  updateTraining(index: number, formation: Training) {
    this.trainingCatalog.update(formations => formations.map((f, i) =>
      (i == index) ? formation : f))
  }
  onDeleteTraining(formation:Training){
    this.trainingCatalog.update(formations=>
    formations.filter(f=>f.id!=formation.id)
    )

  }
  /*  updateTab(index: number) {
    this.trainingCatalog.update(formations =>
      formations.map((elt, i) => i == index ? { ...elt, isFree: !elt.isFree } : elt))
  }
  updateTab2() {
    this.trainingCatalog.update(formations => formations.map(f => ({ ...f })))

  }*/

}
