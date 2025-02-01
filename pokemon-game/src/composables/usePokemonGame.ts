import pokemonApi from "@/modules/pokemon/api/pokemonApi";
import { GameStatus, type PokeInfo, type Pokemon, type PokemonListResponse } from "@/modules/pokemon/interfaces";
import { onMounted, ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('?offset=493&limit=156');
    let pokemonArray = response.data.results.map( (pokemon: PokeInfo) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2];
      return {
        id: +id,
        name: pokemon.name
      }
    })

    pokemonArray = shufflePokemon(pokemonArray);

    return pokemonArray;

  }

  const shufflePokemon = (pokemonArray: Pokemon[]) => {
    for (let i = pokemonArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
    }

    return pokemonArray;
  }

  onMounted(async () => {
    const pokemonList = await getPokemon();
    console.log(pokemonList);
  })

  return {
    gameStatus,
  }
}
