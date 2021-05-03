import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../episode.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  public favorites : Episode[] = [];
  public id: string[]=[];

  public episode : Episode; //

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    // this.favorites = this.episodeService.getFavs();
   
    //pushing episodes from the session storage into the favorites array to display in the favorites page.
    Object.keys(sessionStorage).forEach((key) => {
      this.episodeService.getEpisode(+key).subscribe(
        episode => {
          this.favorites.push(episode)
        }
      )
    });
  }

  //removing episode given the id from the session storage
  deleteFavorite(id){

    window.location.reload();
    sessionStorage.removeItem(id);
  }

}
