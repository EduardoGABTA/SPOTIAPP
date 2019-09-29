import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  idArtist: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeArtist(artist: any) {
    if (artist.type === 'artist') {
      this.idArtist = artist.id;
    } else if  (artist.type === 'album') {
      this.idArtist = artist.artists[0].id;
    }
    this.router.navigate(['artist', this.idArtist]);
    console.log(this.idArtist);
  }
}
