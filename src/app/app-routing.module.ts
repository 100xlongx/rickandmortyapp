import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeComponent } from './episode/episode.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: "", redirectTo: '/episodes', pathMatch: 'full'},
  { path: "favorites", component: FavoritesListComponent},
  { path: "episodes", component: EpisodeListComponent},
  { path: "episodes/:id", component: EpisodeComponent},
  { path: "search/:term", component: SearchResultsComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
