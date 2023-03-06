import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: any;
  isEditing = false;
  editedTitle = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`).subscribe(
      response => {
        this.album = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onEdit(): void {
    this.isEditing = true;
    this.editedTitle = this.album.title;
  }

  onSave(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: this.editedTitle }).subscribe(
      response => {
        this.album.title = this.editedTitle;
        this.isEditing = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  onPhotosClick(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  onBackClick(): void {
    this.router.navigate(['/albums']);
  }

}
