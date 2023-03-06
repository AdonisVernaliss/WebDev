import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).subscribe(
      response => {
        this.photos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onBackClick(): void {
    this.router.navigate(['/albums', this.route.snapshot.params.id]);
  }

}
