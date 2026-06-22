<script setup>
import { ref } from 'vue';
import TechTag from '../partials/TechTag.vue';

const props = defineProps({
  category: String,
  description: String,
  tags: Array
})

const showDetails = ref(false);
</script>

<template>
  <div class="rounded-lg shadow-lg my-8 px-8 py-4 dark:bg-base/10 dark:inset-shadow-sm dark:inset-shadow-gray-500/50">
    <h3 class="text-xl font-bold tracking-wider">
      {{ category }}
      <button 
        @click="showDetails = !showDetails"
        class="text-xs cursor-pointer text-info"
      >
        {{ showDetails != true ? ' more' : ' less' }}
      </button>
    </h3>
    <em 
      class="italic text-xs text-body transition-opacity duration-75 tracking-wider"
      :class="showDetails == true ? 'visible opacity-100' : 'hidden opacity-0'"
      >
      {{ description }}
    </em>
    <div class="grid grid-cols-2">
      <div class="justify-self-start"
        v-for="tag in tags"
      >
        <div class="flex items-center">
          <div class="size-8 sm:size-12 md:size-16 box-content p-1 dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded sm:rounded-lg">
            <TechTag 
              :tag="tag"
            />
          </div>
          <div class="dark:border-none border-subtle">
            <h5 class="font-semibold tracking-tight">{{ tag.title }}</h5>
            <p  class="text-sm text-content font-light">{{ tag.useFrequency }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>