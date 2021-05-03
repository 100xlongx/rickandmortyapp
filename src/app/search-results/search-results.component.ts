import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode, EpisodeService } from '../episode.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public searchTerm : string = "";
  public results : Episode[] = [];

  constructor(private episodeService : EpisodeService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.searchTerm = params.get("term");

      this.episodeService.getAll().subscribe(response => {
        this.results = response.results.filter(episode => episode.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      })
    })
  }


  renderFavorites(id){
    this.results.forEach(element => {
      if(element.id == id){
        sessionStorage.setItem(id,JSON.stringify(element));
      }
    });
  }

}
