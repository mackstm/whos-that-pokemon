<template>

  <img v-if="!showPokemon" v-bind:src="pkmnImage" class="brightness-0 h-[200px]" alt="pokemon"/>

  <img v-else v-bind:src="pkmnImage" class="fade-in h-[200px]" alt="pokemon"/>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
  interface Props {
    pokemonId: number;
    showPokemon?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    showPokemon: false
  });

  const pkmnImage = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
  );

</script>

<style scoped>

</style>
