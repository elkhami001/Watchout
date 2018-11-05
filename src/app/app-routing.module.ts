import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListDetailComponent } from './components/video-list-detail/video-list-detail.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component :VideoListComponent },
  { path: 'detail/:episodeId', component :VideoListDetailComponent },
  { path: 'dashboard', component :DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
