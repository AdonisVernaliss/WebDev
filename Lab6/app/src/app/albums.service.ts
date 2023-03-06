import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Album } from './album';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  getAlbumById(albumId: number): Observable<Album> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.get<Album>(url).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  createAlbum(album: string): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  updateAlbum(albumId: number, updates: string): Observable<Album> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.put<Album>(url, updates).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  deleteAlbum(albumId: number): Observable<Album> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.delete<Album>(url).pipe(
      map(() => ({ id: albumId, userId: 0, title: '' } as Album)),
      catchError((error: any) => throwError(error))
    );
  }
}
