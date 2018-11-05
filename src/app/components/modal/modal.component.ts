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
  // @Input() name: any;
  films: Film[];
  film= new Film();

  mayo = 'WAAROM KAN IK DIT NIET BINDEN!!!';

  constructor(
    public activeModal: NgbActiveModal,
    private filmsService: FilmsService
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  postFilmForm(name: string, description: string, youtubeId: string){
    let film = new Film();
    film.name = name;
    film.description = description;
    film.youtubeId = youtubeId;
    this.filmsService.addFilm(film);
    location.reload();
  }
  postEditFilmForm(name: string, description: string, youtubeId: string, id: number){
    let film = new Film();
    film.name = name;
    film.description = description;
    film.youtubeId = youtubeId;
    film.id = id;
    console.log(name + description + youtubeId + id);
    this.filmsService.addEditFilm(film);
    location.reload();
  }

  getAllMovies(){
    this.filmsService.getAll()
    .subscribe(films => this.films = films);
  }
}
