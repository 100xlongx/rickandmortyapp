import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Route } from '@angular/compiler/src/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, from } from 'rxjs';
import { Episode, EpisodeService } from '../episode.service';

import episodes from "../episodes.json";

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  let route: ActivatedRoute;
  let service : EpisodeService;

  let spy : any;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
      RouterTestingModule.withRoutes([])],
      declarations: [ SearchResultsComponent ],
      providers : [
        {
          provide: ActivatedRoute,
          useValue: {
            // paramMap: {get: (term: number) => {term:}}
           paramMap: of(convertToParamMap({term: "p"}))
          }
        },
      ]
    })

    TestBed.compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(EpisodeService)

    // service = fixture.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to get paramID', () => {

    component.ngOnInit();

    //the mocked parammap should be 'pi' for pilot
    expect(component.searchTerm).toBe("p");

  })

  it('should get the search results', fakeAsync(() => {
    spy = spyOn(service, 'getAll').and.returnValue(of({results: [episodes.results[0],
      episodes.results[1], episodes.results[2], episodes.results[3], episodes.results[4]
    ]}));

    component.ngOnInit();
    tick();

    expect(component.results.length).toBe(2);
    expect(component.results[0]).toBe(episodes.results[0])

  }))

  it("the input value should be dynamic", fakeAsync(() => {
    

  }));
});
