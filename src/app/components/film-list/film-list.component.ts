import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[] = [];
  obs: any;
  youtubeImgUrl = 'https://img.youtube.com/vi/w8HdOHrc3OQ/maxresdefault.jpg';
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getAll()
    .subscribe(films => this.films = films);
  }

  getYoutubeUrl(id: string){
    const youtubEmbedUrl = 'https://www.youtube.com/embed/';
    return  youtubEmbedUrl + id;
  }
  getYoutubeImg(id: string){
    const youtubeImgdUrl = 'https://img.youtube.com/vi/';
    // return  youtubeImgdUrl + id + '/maxresdefault.jpg';
    return  youtubeImgdUrl + id + '/0.jpg';
  }
}
