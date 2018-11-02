import { Component, OnInit, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  film = new Film();
  films: Film[];

  constructor(
    public activeModal: NgbActiveModal,
    private filmsService: FilmsService
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  postFilmForm(name: string, description: string, id: string){
    this.film.name = name;
    this.film.description = description;
    this.film.youtubeId = id;
    console.log(this.film.name + this.film.description + this.film.youtubeId );
    this.filmsService.addFilm(this.film);
    location.reload();
  }

  getAllMovies(){
    this.filmsService.getAll()
    .subscribe(films => this.films = films);
  }

}
