import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeService } from '../episode.service';

import { Episode } from "../episode.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public input : string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public handleSearch() {
    // let episodes : Episode[] = this.episodeService.search(this.input);

    this.router.navigate([`/search/${this.input}`])
  }

}
