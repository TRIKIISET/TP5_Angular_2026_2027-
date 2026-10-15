import { Component, signal } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PizzaItem } from '../pizza-item/pizza-item';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [PizzaItem, FormsModule, JsonPipe],
  selector: 'app-pizza-list',
  styleUrl: './pizza-list.css',
  templateUrl: './pizza-list.html',
})
export class PizzaList {
  // pizzas = signal<Pizza[]>([
  //   { id: 1, name: "Neptune", image: "images/neptune.jpg", price: 11.3, vegetarian: false },
  //   { id: 2, name: "4 Saisons", image: "images/saisons.jpg", price: 12.5, vegetarian: true },
  //   { id: 3, name: "Fruits de Mer", image: "images/mer.jpg", price: 18.4, vegetarian: false },
  //   { id: 4, name: "Marguerite", image: "images/marguerite.jpg", price: 9.8, vegetarian: true }
  // ]);
  pizzasList = signal<Pizza[]>([
    { 
      id: 1, name: "Neptune", image: "images/neptune.jpg", price: 11.3, vegetarian: false,
      comments: [
        { id: 101, name: 'Youssef', date: new Date(2026, 9, 12), message: "Délicieuse Pizza" },
        { id: 102, name: "Cyrine", date: new Date(2026, 9, 13), message: "Excellente pizza" }
      ]
    },
    { 
      id: 2, name: "4 Saisons", image: "images/saisons.jpg", price: 12.5, vegetarian: true,
      comments: [
        { id: 201, name: "Aziz", date: new Date(2026, 9, 12), message: "Je recommande vivement" }
      ]
    },
    { id: 3, name: "Fruits de Mer", image: "images/mer.jpg", price: 18.4, vegetarian: false },
    { 
      id: 4, name: "Marguerite", image: "images/marguerite.jpg", price: 9.8, vegetarian: true,
      comments: [
        { id: 401, name: "Ghada", date: new Date(2026, 8, 12), message: "Très moyen" }
      ]
    }
  ]);

  onRemovePizza(id:number){
    this.pizzasList.update(pizzas=> pizzas.filter(p=>p.id!==id))
  }

  /*Mise à jour de la pizza dans la liste après suppression d'un commentaire*/
updatePizzaInList(updatedPizza: Pizza){
    this.pizzasList.update(pizzas => 
      pizzas.map(p => p.id === updatedPizza.id ? updatedPizza : p) 
    );
  }
}