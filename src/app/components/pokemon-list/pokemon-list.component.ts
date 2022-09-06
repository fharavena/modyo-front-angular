import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonDetail } from 'src/app/models/pokemonDetail';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  msg_error = '';
  total = 0;
  next = '';
  previous = '';
  pokemons: Array<Pokemon> = [];
  pokeDet: PokemonDetail | undefined;
  simpleDescript: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.get_pokemons(0, 20);
  }

  get_pokemons(offset: number, limit: number) {
    this.pokemonService.get_pokemon_list(offset, limit).subscribe((res) => {
      this.total = res.data.count
      this.pokemons = res.data.results
      this.next = res.data.next
      this.previous = res.data.previous

    })
  }

  next_page() {
    if (this.next) {
      this.otra_pagina(this.next)
    }
  }
  previous_page() {
    if (this.next && this.next !== '') {
      this.otra_pagina(this.previous)
    }
  }

  otra_pagina(url: string) {
    this.pokemonService.get_otra_pagina(url).subscribe((res) => {
      this.total = res.data.count
      this.pokemons = res.data.results
      this.next = res.data.next
      this.previous = res.data.previous
    })
  }

  get_pokemon_detail(id: number) {
    this.pokemonService.get_pokemon_detail(id).subscribe((res) => { 
      this.pokeDet = res.data
      this.simpleDescript = this.pokeDet?.description[0]
    })
  }

}
