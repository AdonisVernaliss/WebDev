import { Component } from '@angular/core';
import {cards as data, ICard} from "../data/cards";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: ICard[] = data

  selectedCategory: string = '';

  filterCards(category: string) {
    this.selectedCategory = category;
    if (category === '') {
      this.cards = data;
    } else {
      this.cards = data.filter(card => card.category === category);
    }
  }

}
