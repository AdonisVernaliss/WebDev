import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];

  constructor(private albumsService: AlbumService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  onDeleteAlbum(albumId: number): void {
    this.albumsService.deleteAlbum(albumId).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== albumId);
    });
  }

  onEditAlbum(albumId: number, newTitle: string): void {
    this.albumsService.updateAlbum(albumId, newTitle).subscribe(() => {
      const albumToUpdate = this.albums.find(album => album.id === albumId);
      if (albumToUpdate) {
        albumToUpdate.title = newTitle;
      }
    });
  }

  onCreateAlbum(newTitle: string): void {
    this.albumsService.createAlbum(newTitle).subscribe(album => {
      this.albums.push(album);
    });
  }


}
