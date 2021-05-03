import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http"
import { tap } from 'rxjs/operators';

export interface Character {
  name: string,
  status: string,
  image: string,
}

export interface ApiResponse {
  info : {};
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public endpoint : string = 'https://rickandmortyapi.com/api/character';

  public characters : Character[] = [];

  constructor(private http: HttpClient) {
    this.getAll();
  }

  public getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.endpoint)
    .pipe(
      tap(
        data => {
          this.characters = data.results;
        }
      )
    )
  }

  public getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.endpoint + `/${id}`)
  }

  public getCharacterEndpoint(endpoint: string): Observable<Character> {
    return this.http.get<Character>(endpoint);
  }


}
