<template>
  <div v-for="item in options">
    <button>Option {{ item }}</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const options = ref([1,2,3,4]);
</script>

<style scoped>

  button {
    @apply bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[150px] text-white rounded-full
  }

</style>

