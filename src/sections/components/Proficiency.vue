<script setup>
import { ref, Transition } from 'vue';
import TechTag from '../partials/TechTag.vue';

const props = defineProps({
  category: String,
  description: String,
  tags: Array
})

const showDetails = ref(false);
</script>

<template>
  <div class="mt-8 px-4 py-4 bg-peak rounded-lg shadow-lg dark:bg-raised/50 dark:inset-shadow-sm dark:inset-shadow-gray-500/50">
    <h3 class="text-xl sm:text-2xl md:text-4xl font-bold tracking-wider">
      {{ category }}
      <button 
        @click="showDetails = !showDetails"
        class="text-xs sm:text-sm cursor-pointer text-info hover:scale-110 transition-transform"
      >
        {{ showDetails != true ? ' more' : ' less' }}
      </button>
    </h3>
    <div class="min-h-8">
      <Transition
      enter-active-class="transition-all ease-out duration-200"
      enter-from-class="opacity-0 -translate-x-10"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all ease-in duration-125"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-10"
      >
      
        <div v-if="showDetails" class="transform">
          <em 
          class="italic text-xs sm:text-sm text-body tracking-wider"
          >
            {{ description }}
          </em>
        </div>
      </Transition>
    </div>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
      <div class="justify-self-start"
        v-for="tag in tags"
      >
        <div class="flex items-center hover:scale-110 cursor-default transition-all duration-75">
          <div class="size-8 sm:size-12 md:size-16 box-content p-1 dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded sm:rounded-lg">
            <TechTag 
              :tag="tag"
            />
          </div>
          <div class="dark:border-none border-subtle">
            <h5 class="text-sm sm:text-md md:text-lg text-brand-muted/80  font-semibold tracking-tight">{{ tag.title }}</h5>
            <p  class="text-xs sm:text-sm text-content font-light">{{ tag.useFrequency }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>