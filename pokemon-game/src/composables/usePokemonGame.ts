import pokemonApi from "@/modules/pokemon/api/pokemonApi";
import { GameStatus, type PokemonListResponse } from "@/modules/pokemon/interfaces";
import { onMounted, ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('?offset=493&limit=156');

    console.log(response.data.results);
  }

  onMounted(() => {
    getPokemon();
  })

  return {
    gameStatus,
  }
}
