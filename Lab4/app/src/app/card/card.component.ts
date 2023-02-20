import { Component } from '@angular/core'

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})
export class CardComponent {

  title = "Card Title"

  text = "Hello World!"

  number = 42

}
