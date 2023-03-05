import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';
  time: string;
  constructor() {
    setInterval(()=>{
      this.time = new Date().toLocaleTimeString();
    }, 1000)
  }

}


//  constructor(private http: HttpClient) {
//   }
//
//   getAll(): Observable<ICard[]> {
//     return this.http.get<ICard[]>('http://kaspi.kz/shop/c/baby%20care/brand-chicco/')
//   }
