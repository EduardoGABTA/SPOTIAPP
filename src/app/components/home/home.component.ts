import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: Boolean;
  canciones: any[] = [];
  error = false;
  mensajeError = '';
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.canciones = data;
      this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
      this.error = true;
    });
  }

  ngOnInit() {
  }

}
