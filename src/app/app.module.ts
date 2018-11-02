import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SafePipe } from './pipes/safe.pipe';
import { HomeComponent } from './components/home/home.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ItemComponent } from './components/film-list/item/item.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalComponent } from './components/dashboard/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FilmListComponent,
    SafePipe,
    HomeComponent,
    FilmDetailsComponent,
    ItemComponent,
    DashboardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalComponent,
  ]
})
export class AppModule { }
