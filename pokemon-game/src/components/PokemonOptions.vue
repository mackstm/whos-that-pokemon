<template>
  <div v-for="item in options">
    <button class="bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[150px] text-white rounded-full">Option {{ item }}</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const options = ref([1,2,3,4]);
</script>

<style scoped>

</style>

