export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeInfo[];
}

export interface PokeInfo {
  name: string;
  url: string;
}
