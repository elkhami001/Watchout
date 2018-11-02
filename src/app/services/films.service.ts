import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiUrl = 'https://swapi.co/api/films/';
  private localApiUrl = 'http://localhost:8080/api/film/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Film[]>(this.localApiUrl);
  }

  getFilm(id: number) {
    return this.http.get<Film>(this.localApiUrl + id + '/')
  }
  
  addFilm(film: Film){
    console.log('adding film..')
    console.log(film);
    this.http.post(this.localApiUrl, film).subscribe((data) => {});
  }
  addEditFilm(film: Film){
    console.log('adding editted film..')
    console.log(film);
    this.http.post(this.localApiUrl, film).subscribe((data) => {});
  }

  delFilm(id: number) {
    console.log(this.localApiUrl + id + '/');
    this.http.delete(this.localApiUrl + id + '/').subscribe((data) => {});
  }

  editFilm(id: number) {
    console.log('placeholder');
    //return this.http.get<Film>(this.localApiUrl + id + '/')
  }
}
