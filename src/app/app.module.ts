import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { EpisodeComponent } from './episode/episode.component';
import { AppRoutingModule } from './app-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    EpisodeListComponent,
    HeaderComponent,
    FavoritesListComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
