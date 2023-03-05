import {Component, Input} from '@angular/core'
import {ICard} from "../data/cards";

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})

export class CardComponent {
  @Input() card: ICard

  details = false

  deleteItm = true

  like: number = 0;

  likeIncr() {
    this.like++;
  }

  deleteItem() {
    this.deleteItm = false;
  }

  shareOnWhatsapp(card: ICard) {
    const message = `Check out this product: ${card.title} for ${card.price}₸ at ${card.link}`;
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  shareOnTelegram(card: ICard) {
    const message = `Check out this product: ${card.title} for ${card.price}₸ at ${card.link}`;
    const url = `tg://msg?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

}
