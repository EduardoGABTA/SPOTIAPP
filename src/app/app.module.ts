import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// Importar rutas del proyecto
import { RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './shared/cards/cards.component';
import { LoadingComponent } from './shared/loading/loading.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DomseguroPipe} from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    AngularFontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
