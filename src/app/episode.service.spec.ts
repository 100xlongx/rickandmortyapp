import { fakeAsync, flush, TestBed } from '@angular/core/testing';

import { EpisodeService } from './episode.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Episode, ApiResponse } from  "./episode.service";

import episodes from "./episodes.json"
import characters from "./characters.json";

import { componentFactoryName } from '@angular/compiler';

// import { of } from "rxjs";

// const episodes: Episode[] = [episodes[0]]

describe('EpisodeService', () => {
  let service: EpisodeService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  // let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EpisodeService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets all data', fakeAsync(() => {
    const episodeEndpoint = `https://rickandmortyapi.com/api/episode`;

    service.getAll().subscribe(data => {
      expect(data.results[2]).toEqual(episodes.results[2])
      expect(data[9]).not.toEqual(episodes.results[2])
    })

    let req = httpTestingController.expectOne(episodeEndpoint)
    req.flush(episodes);

    httpTestingController.verify();

    flush();

  }));

  it('gets an single episode', fakeAsync(() => {
    const episodeNumber : number = 10;

    const testData : Episode = episodes.results[episodeNumber];
    const wrongData : Episode = episodes.results[8];

    const episodeEndpoint = `https://rickandmortyapi.com/api/episode/${episodeNumber}`

    httpClient.get<Episode>(episodeEndpoint).subscribe(data => {
        expect(data).toEqual(testData);
        expect(data).not.toEqual(wrongData)
      }
    )

    let req = httpTestingController.expectOne(episodeEndpoint)
    req.flush(testData);

    service.getEpisode(episodeNumber).subscribe(data => {
      expect(data).toEqual(testData);
      expect(data).not.toEqual(wrongData);
    })

    req = httpTestingController.expectOne(episodeEndpoint)
    req.flush(testData);

    
    httpTestingController.verify();
    flush();
  }))

  // it('search is functional', () => {
  //   let eps : Episode[] = [episodes.results[0], episodes.results[1]]
  //   service.episodes = eps;


  //   expect(service.search('asdjaslkdj').length).toBe(0);

  //   expect(service.search("Pilot")).toBeTruthy();

  //   service.episodes = [];

  //   expect(service.search("Pilot").length).toBe(0);

  // })

  // it('get characters', () => {
    
  // })


});
