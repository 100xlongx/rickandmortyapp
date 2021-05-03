import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttpClientTestingModule } from "@angular/common/http/testing";

import { EpisodeComponent } from './episode.component';
import { Episode, EpisodeService } from '../episode.service';

import { Character, CharacterService } from "../character.service";

import { RouterTestingModule } from "@angular/router/testing";

import episodes from "../episodes.json";
import characters from "../characters.json";

import { ActivatedRoute, convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject, of, Observable } from 'rxjs';
import { By } from 'protractor';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;
  let html;
  let route : ActivatedRoute;
  let episodeService : EpisodeService;
  let characterService : CharacterService;

  //initialized episodes
  let episode1 : Episode = episodes.results[0];
  let episode2 : Episode = episodes.results[1];
  let episode3 : Episode = episodes.results[2];

  let character1 : Character = characters.results[0];
  let character2 : Character = characters.results[1];

  let spy : jasmine.Spy;

  const routeParam : string = "1";


  //let episode : Episode;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ EpisodeComponent],
      providers: [ EpisodeService,
        {
          provide: ActivatedRoute, useValue: {paramMap: of(convertToParamMap({id: routeParam}))}
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    route = TestBed.inject(ActivatedRoute);
    episodeService = TestBed.inject(EpisodeService);
    characterService = TestBed.inject(CharacterService);

    component = fixture.componentInstance;
    html = fixture.nativeElement;

    fixture.autoDetectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("component renders html", fakeAsync(() => {
    component.ngOnInit();

    let h4 = html.querySelector("#title")

    expect(h4).toBeDefined();

  }))

  it('getting an episode from episodeService', () => {
    spy = spyOn(episodeService, "getEpisode").and.returnValue(of(episode2))

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();

    //the route param should not change but the spied function should return episode 2 still 
    expect(component.id).toBe(+routeParam);
    expect(component.episode).toBe(episode2);
  })

  it("collect the characters of the data", fakeAsync(() => {
    spyOn(episodeService, "getEpisode").and.returnValue(of(episode2))
    spy = spyOn(characterService, "getCharacterEndpoint").and.returnValue(of(characters.results[0]))

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();

    //expect spy function to have been called for every character in the episode array
    expect(spy.calls.count()).toBe(component.episode.characters.length);
    //we should have a character for every endpoint
    expect(component.episode.characters.length).toBe(component.characters.length);

    tick();
    fixture.detectChanges();

    const card = fixture.debugElement.nativeElement.querySelector('.character-card');

    expect(card).toBeDefined();

  }))
});
