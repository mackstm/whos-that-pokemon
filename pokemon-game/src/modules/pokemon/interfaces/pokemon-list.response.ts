export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeInfo[];
}

interface PokeInfo {
  name: string;
  url: string;
}
