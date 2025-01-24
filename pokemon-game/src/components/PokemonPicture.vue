<template>

  <img v-bind:src="imgUrl" class="brightness-0 h-[200px]" alt="Volcarona"/>

</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const imgUrl = ref('https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/637.png');

</script>

<style scoped>

</style>
