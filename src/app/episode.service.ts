import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable , Subject} from 'rxjs';
import { tap } from "rxjs/operators";

export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

export interface ApiResponse {
  info? : {};
  results: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  public episodes : Episode[] = [];
  public favorites : Episode[] = [];
  public characters : Episode[] = [];

  public info: {};

  public endpoint : string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {
    this.getAll();
  }


  getAll() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.endpoint + `episode`)
      .pipe(
        tap(
          data => {
            this.episodes = data.results;
            this.info = data.info;
          },
          err => console.error(":(", err)
        )
      );
  }

  public search(name: string) : Episode[] {
    return this.episodes.filter(episode => episode.name.includes(name))
    
  }
  
  public getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(this.endpoint + `episode/${id}`);
  }


  // public setFav(episode : Episode){
  //   this.favorites.push(episode);
  // }
  // public getFavs() : Episode[]{
  //   return this.favorites;
  // }

}
