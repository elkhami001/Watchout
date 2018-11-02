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
    this.getAllMovies()
  }

  editFilm(){
    console.log('placeholder');
  }

  delFilm(id: number){
    console.log('deleting movie with id: ' + id)
    this.filmsService.delFilm(id);
    this.getAllMovies();
    location.reload();
  }

  getAllMovies(){
    this.filmsService.getAll()
    .subscribe(films => this.films = films);
  }

  open(){
    const modalRef = this.modalService.open(ModalComponent);
    //modalRef.componentInstance.name = 'World';
  }
}
