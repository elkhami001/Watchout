import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmsService } from '../../services/films.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
    ) { }

    films: Film[];

  ngOnInit() {
    this.getAllFilms()
  }

  /// -----VIEW FUNCTIONS-----

  openEditFilmForm(name: string, description: string, youtubeId: string, id: number){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.type = 'edit';
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.youtubeId = youtubeId;
    modalRef.componentInstance.id = id;
  }

  openAddFilmForm(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.type = 'add';
  }

  delFilm(id: number){
    console.log('deleting movie with id: ' + id)
    this.filmsService.delFilm(id);
    //this.getAllFilms();
    location.reload();
  }

  /// -----SERVICES-----

  getAllFilms(){
    this.filmsService.getAll()
    .subscribe(films => this.films = films);
  }

  getSingleFilm(id: number): any{
    return this.filmsService.getFilm(id);
  }
}
