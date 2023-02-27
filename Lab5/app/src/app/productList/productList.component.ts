import { Component } from '@angular/core';

import { ICard, cards } from "../data/cards";

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent {
  itemList: ICard[] = cards;
  onDeleteItem(id:number){
    this.itemList = this.itemList.filter((x) => x.id !== id);
  }
}


