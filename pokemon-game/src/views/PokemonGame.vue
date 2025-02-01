<template>
  <section>
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section>
    <h1>¿Cuál es ese Pokémon?</h1>

    <PokemonPicture/>

    <PokemonOptions/>

  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { usePokemonGame } from '@/composables/usePokemonGame';

const { gameStatus } = usePokemonGame();
</script>

<style scoped>

section {
  @apply flex flex-col justify-center items-center w-screen h-screen
}

</style>
