import { Component, Input, OnInit } from '@angular/core';
import { Episode, EpisodeService } from '../episode.service';

import { ActivatedRoute } from "@angular/router";
import { Character, CharacterService } from '../character.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episode: Episode;

  public characters : Character[] = [];

  public id : number;

  constructor(private episodeService : EpisodeService, private route: ActivatedRoute, private characterService : CharacterService) {}

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
    })

    this.episodeService.getEpisode(this.id).subscribe(episode => {
      this.episode = episode

      episode.characters.forEach(endpoint => {

        this.characterService.getCharacterEndpoint(endpoint).subscribe(
          character => {
            this.characters.push(character)
          }
        )
      });

    });
  }

}
