import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: Boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
  }

  artistas: any[] = [];

  ngOnInit() {
  }

  buscar(palabra: string) {
    this.spotify.getArtists(palabra).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
