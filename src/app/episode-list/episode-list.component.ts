import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../episode.service';
import { FavoriteService } from '../favorite.service'

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  season1: Episode[] = [];
  season2: Episode[] = [];
  season3: Episode[]=[];
  constructor(private episodeService: EpisodeService , private favoriteservice : FavoriteService) { }

  ngOnInit(): void {
    //pushing elemenst from the service to their respective season array. 
    this.episodeService.getAll().subscribe(episodes => {this.episodes = episodes.results
    this.episodes.forEach(element => {
      if(element.episode.slice(2,3) == "1"){
        this.season1.push(element);
      }
      if(element.episode.slice(2,3) == "2"){
        this.season2.push(element);
      }
     
    });
    });
    
  }

  //storing favorites into the session array after user clicks on the favorites button.
  renderFavorites(id){
    this.episodes.forEach(element => {
      if(element.id == id){
        sessionStorage.setItem(id,JSON.stringify(element));
       // this.episodeService.setFav(element);
      }
    });
  }



  
}
