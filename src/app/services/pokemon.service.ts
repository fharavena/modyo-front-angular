import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokedex_url = environment.url;
  constructor(public _http: HttpClient) { 
  }

  public get_pokemon_list(offset: number, limit: number): Observable<any> {
    let urlword: string = this.pokedex_url+"all/?offset=" + offset + "&limit=" + limit;
    return this._http.get(urlword);
  }

  public get_pokemon_detail(name: any): Observable<any> {
    return this._http.get(this.pokedex_url+"get/" + name);
  }

  public get_otra_pagina(url: string): Observable<any> {
    return this._http.get(url);
  }
}
