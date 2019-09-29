import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({Authorization: 'Bearer BQCfVnJysIAGr1Q4ZW7NmW9xY-ThoGlAvQmEcgWs9NtAHOty2mF2TpkxscNoFwbgI6i0Q7agTbxeDtZXgNa6Oujqiwqzkz30lNnew1BIYnrDQQP5_n92cCNyyrZELAn5JqPEB4CvpZA0Sn84lliXlamQFLYd5PkHqlSOscrXrOpZHdWRYcuX9cqMdDxLvnCG_7U3OBbJ1_Hpvg'});
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data) => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map((data) => data['artists'].items));
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);// .pipe(map((data) => data['artists'].items));
  }

  getTopTraks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map((data) => data['tracks']));
  }
}
