import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component :FilmListComponent },
  { path: 'detail/:episodeId', component :FilmDetailsComponent },
  { path: 'dashboard', component :DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
