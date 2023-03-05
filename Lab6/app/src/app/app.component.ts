import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';

}


//  constructor(private http: HttpClient) {
//   }
//
//   getAll(): Observable<ICard[]> {
//     return this.http.get<ICard[]>('http://kaspi.kz/shop/c/baby%20care/brand-chicco/')
//   }
