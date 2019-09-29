import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  loadRedy = false;
  artist: any = {};
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTraks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadRedy = true;
    this.spotify.getArtist(id).subscribe((artis: any) => {
      this.artist = artis;
      this.loadRedy = false;
    });
  }
  getTopTraks(id: string) {
    this.spotify.getTopTraks(id).subscribe((traks) => {
      this.topTracks = traks;
    });
  }
}
