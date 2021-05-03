import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EpisodeService } from '../episode.service';

import { EpisodeListComponent } from './episode-list.component';

import { Episode} from "../episode.service"

import episodes from "../episodes.json";
import { of } from 'rxjs';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let episodeService : EpisodeService;
  let html;

  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ EpisodeListComponent ],
      providers: [ EpisodeService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    html = fixture.nativeElement;

    episodeService = TestBed.inject(EpisodeService);

    spyOn(episodeService, "getAll").and.returnValue(of({results: [episodes.results[0], episodes.results[1]]}))

    component.ngOnInit();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the list of episodes', fakeAsync(() => {
    expect(component.episodes).toBeDefined();
    expect(component.episodes.length).toEqual(2);
  }))

  it('should render some episodes', () => {
    expect(html.querySelector('.episode-listing')).toBeDefined();
    //expect(html.querySelector('.episode-listing').textContent).toEqual(component.name);
  })

  it('should be able to get to episode via a button', () => {
    expect(html.querySelector('.episode-button')).toBeDefined();
  })



});
