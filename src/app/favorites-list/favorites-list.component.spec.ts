import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Episode, EpisodeService } from '../episode.service';
import episodes from "../episodes.json";

import { FavoritesListComponent } from './favorites-list.component';

describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;
  let episode1 : Episode = episodes.results[0];

  let episodeService: EpisodeService;
  let spy : jasmine.Spy;

  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [EpisodeService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;

    episodeService = TestBed.inject(EpisodeService);

    sessionStorage.setItem('pickle', "rick");
    sessionStorage.setItem('pickle', "rick");

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of favorite episodes',() => {
    expect(component.favorites).toBeDefined();
    expect(html.querySelector('episode'))

  });

  it('should render some favorite episodes', () => {
    expect(html.querySelector('.episode-listing')).toBeDefined();
  })

  it('should populate the favorites array', () => {
    spy = spyOn(episodeService, "getEpisode").and.returnValue(of(episodes.results[0]))

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.favorites.length).toEqual(2);

  
    //console.log(sessionStorage);
  });

  //it('should delete an episode the favorites array', () => {
    //   spy = spyOn(episodeService, "getEpisode").and.returnValue(of(episodes.results[0]))

    //  component.deleteFavorite(episodes.results[0].id);
    //  expect(spy).toHaveBeenCalled();
    //  expect(component.favorites.length).toEqual(2);

    
 // });

});
