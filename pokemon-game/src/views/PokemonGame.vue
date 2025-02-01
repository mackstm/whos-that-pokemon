<template>
  <section v-if="isLoading">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else>
    <h1>¿Cuál es ese Pokémon?</h1>

    <h3 class="mt-2">
      {{ gameStatus === GameStatus.Playing ? 'Adivina el Pokémon' : 'Intentalo de nuevo en: ' + restartCounter }}
    </h3>

    <PokemonPicture :pokemonId="randomPokemon.id" :showPokemon="gameStatus !== GameStatus.Playing"/>

    <PokemonOptions :options="pokemonOptions" :correct-option="randomPokemon.id"
    :block-selection="gameStatus !== GameStatus.Playing" @selected-option="checkAnswer"/>

    <div class="text-sm mt-2">
      Victorias: {{ winCount }}
    </div>

  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { usePokemonGame } from '@/composables/usePokemonGame';
import { GameStatus } from '@/modules/pokemon/interfaces';


const { gameStatus, isLoading, randomPokemon, pokemonOptions, checkAnswer, winCount, restartCounter } = usePokemonGame();

</script>

<style scoped>

section {
  @apply flex flex-col justify-center items-center w-screen h-screen
}

</style>

