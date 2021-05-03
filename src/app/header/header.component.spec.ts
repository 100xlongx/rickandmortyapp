import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EpisodeListComponent } from '../episode-list/episode-list.component';
import { EpisodeComponent } from '../episode/episode.component';

import { Location } from "@angular/common";

import { HeaderComponent } from './header.component';
import { FavoritesListComponent } from '../favorites-list/favorites-list.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router : Router;
  let location : Location;

  let navigateSpy : jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, 
        RouterTestingModule.withRoutes([
          { path: "episodes", component: EpisodeListComponent },
          { path: "episodes/:id", component: EpisodeComponent },
          { path: "search/", component: SearchResultsComponent },
          { path: "search/:term", component: SearchResultsComponent},
          { path: "favorites", component: FavoritesListComponent },
        ])],
      declarations: [ HeaderComponent ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form is populated', () => {
    let bar : HTMLInputElement = fixture.nativeElement.querySelector("#searchbar");
    let form : HTMLFormElement = fixture.nativeElement.querySelector("#searchform");
    let submit = fixture.nativeElement.querySelector("#searchsubmit");

    expect(bar).toBeDefined();
    expect(form).toBeDefined();
    expect(submit).toBeDefined();

  })

  it('navbar works', fakeAsync(() => {
    navigateSpy = spyOn(router, 'navigate');

    const episodeLink : HTMLInputElement = fixture.nativeElement.querySelector("#episodeLink");
    const favoritesLink : HTMLInputElement = fixture.nativeElement.querySelector("#favoriteLink");

    episodeLink.click();
    tick();

    expect(location.path()).toBe("/episodes");

    favoritesLink.click();
    tick();

    expect(location.path()).toBe("/favorites")

    
  }))


  //this test currently doesn't work
  it('search function works', fakeAsync(() => {

    const searchForm : HTMLInputElement = fixture.nativeElement.querySelector('#searchbar');
    // const submit : HTMLInputElement = fixture.nativeElement.querySelector("#searchsubmit");

    searchForm.value = "please work";
    searchForm.dispatchEvent(new Event('input'));

    console.log(component.input);

    // submit.click();

    tick();


  }))


});
