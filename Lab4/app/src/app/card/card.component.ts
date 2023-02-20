import {Component, Input} from '@angular/core'
import {ICard} from "../models/card";

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})
export class CardComponent {
  @Input() card: ICard

  details = false
}
