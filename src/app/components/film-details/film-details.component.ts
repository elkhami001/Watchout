import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  film : Film;
  filmId : number;
  constructor(
    private filmService: FilmsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.filmId = +this.activatedRoute.snapshot.params['episodeId'];
    this.filmService.getFilm(this.filmId)
    .subscribe(film => this.film = film);
  }

  getYoutubeUrl(id: string){
    const youtubEmbedUrl = 'https://www.youtube.com/embed/';
    return  youtubEmbedUrl + id;
  }
}
