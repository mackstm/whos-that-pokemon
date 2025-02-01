<template>

    <button v-for="{ name, id } in options" :key="id" class="capitalize"
    @click="$emit('selectedOption', id)"
    :disabled="blockSelection"
    :class="{ 'correct': id === correctOption && blockSelection }"
    >
      {{ name }}
    </button>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/modules/pokemon/interfaces';

interface Props {
  options: Pokemon[],
  blockSelection: boolean;
  correctOption: number;
}

const props = defineProps<Props>();

defineEmits<{selectedOption: [id: number]}>();


</script>

<style scoped>

  button {
    @apply bg-purple-600 hover:bg-purple-700 mb-2 p-2 w-[200px] text-white rounded-full
  }

  .correct {
    @apply bg-green-600
  }

</style>

