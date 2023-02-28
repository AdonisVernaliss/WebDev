import { Component } from '@angular/core';
import {ICard} from "./data/cards";
import {cards as data} from "./data/cards";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';

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


//  constructor(private http: HttpClient) {
//   }
//
//   getAll(): Observable<ICard[]> {
//     return this.http.get<ICard[]>('http://kaspi.kz/shop/c/baby%20care/brand-chicco/')
//   }
