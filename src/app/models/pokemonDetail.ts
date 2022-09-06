export interface PokemonDetail {
    id: number;
    name: string;
    weight: number;
    picture: string;
    types: string[];
    abilities: string[];
    description: string[];
    evolutions: string[];
}

const pokeDetail: Partial<PokemonDetail> = {}