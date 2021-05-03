import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Episode } from "./episode.service";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
 // favorites: Episode[];
  constructor() { 
    // const favs = localStorage.getItem('favorites');
    // if(!favs){
    //   localStorage.setItem('favorites', JSON.stringify([]));
    // }
    // this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
  }

//   all(): Observable<Episode[]>{
//     return of(this.favorites);
//   }
  
//   add(episode)
//   {
//     const selectedFav = this.favorites;
//     selectedFav.push(episode);
//     localStorage.setItem('favorties', JSON.stringify(selectedFav));
//   }
 }
