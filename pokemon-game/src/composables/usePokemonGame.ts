import pokemonApi from "@/modules/pokemon/api/pokemonApi";
import { GameStatus, type PokeInfo, type Pokemon, type PokemonListResponse } from "@/modules/pokemon/interfaces";
import confetti from "canvas-confetti";
import { computed, onActivated, onMounted, ref } from "vue";

export function usePokemonGame() {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemonList = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const winCount = ref(0);
  const restartCounter = ref(0);

  const isLoading = computed(() => pokemonList.value.length === 0);
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  })

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

  const getNextOptions = (amount: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemonList.value.slice(0, amount);
    pokemonList.value = pokemonList.value.slice(amount);
  }

  onMounted(async () => {
    pokemonList.value = await getPokemon();
    getNextOptions();
  })

  const startCounter = () => {
    restartCounter.value = 5;
    const timer = setInterval(() => {
      restartCounter.value--;
      if (restartCounter.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  const checkAnswer = (pokemonId: number) => {
    if (pokemonId === randomPokemon.value.id) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      });
      winCount.value++;
    } else {
      gameStatus.value = GameStatus.Lost;
    }

    startCounter();

    setTimeout(() => {
      restartGame();
    }, 5000);
  }

  const restartGame = async () => {
    gameStatus.value = GameStatus.Playing;
    pokemonList.value = await getPokemon();
    getNextOptions();
  }

  return {
    gameStatus,
    pokemonOptions,
    isLoading,
    randomPokemon,
    winCount,
    restartCounter,

    //methods
    getNextOptions,
    checkAnswer
  }
}
