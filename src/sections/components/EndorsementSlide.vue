<script setup>
import { onMounted, ref } from 'vue';
import { TextFormatService } from '../../services/TextFormatService';
import Modal from '/src/sections/partials/Modal.vue'

const props = defineProps({
  cardData: Object,
});

// DATA
const fullText = '"' + props.cardData.content.full + '"';
const altText = props.cardData.image.altText || `${props.cardData.name} -- Headshot`
const highlights = ref('');
const showFullText = ref(false);

// METHODS
const formatHighlights = () => {
  highlights.value = TextFormatService.insertRichText(props.cardData.content.highlights);
  highlights.value = "<p>&quot;" + highlights.value + "&quot;</p>"
}

const openFullTextModal = () => {
  showFullText.value = true;
}

onMounted(() => {
  formatHighlights();
})
</script>

<template>
  <div 
    class="h-full p-8 rounded-lg"
  >
  <!-- <div 
    class="h-full p-8"
  > -->
    <div class="sm:flex gap-4 ml-4 sm:items-center md:ml-8 md:mt-8">
      <div class="shrink">
        <img :src="cardData.image.path" :alt="altText"
          class="w-24 md:w-42 aspect-square rounded-full ring-4"
        >
      </div>
      <div class="shrink text-lg md:text-4xl">
        <h3 
          class="font-semibold"
        >
          {{ cardData.name }}
        </h3>
        <h4 
          class="md:text-3xl brightness-80 font-medium"
        >
          {{ cardData["current-role"].title }}
        </h4>
        <h4 
          class="md:text-3xl brightness-80 font-medium"
        >
          {{ cardData["current-role"].organization }}
        </h4>
        <h5 
          class="md:text-2xl font-light"
        >
          {{ cardData.relationship }}
        </h5>
      </div>

    </div>
    <div 
      @click="openFullTextModal"
      class="w-4/5 mx-auto mt-4 md:mt-8 px-4 py-2 hover:scale-105 rounded-lg shadow-lg shadow-brand/20 hover:bg-brand/5 dark:shadow-none dark:bg-background/10 dark:inset-shadow-sm dark:inset-shadow-gray-500/50 transition-all duration-300 cursor-pointer"
      title="Click to read the full endorsement"
    >
      <div class="p-4">
        <div 
        v-html="highlights"
        class="text-sm sm:text-base md:text-2xl"
        />
        <em class="text-subtle text-xs sm:text-lg">Click to read the full context</em>
      </div>
    </div>
  </div>

  <!-- MODAL TO DISPLAY ENDORSEMENT FULLTEXT -->
  <Modal :show="showFullText" @close="showFullText = false">
    <template #title>
      <div class="sm:flex">
        <img 
          :src="cardData.image.path" 
          :alt="altText"
          class="rounded-lg size-32 shrink-0"
        >
        <div class="">
          <h2 class="font-bold">{{ cardData.name }}</h2>
          <h3 class="font-medium"><strong>{{ cardData['current-role'].title }}</strong> @ {{ cardData['current-role'].organization }}</h3>
        </div>
      </div>
    </template>
    <template #content>
      <div class="border-t border-subtle">
        <p class="tracking-wide sm:text-justify full-text" v-html="fullText"/>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
  @reference 'tailwindcss';
  :deep(p strong) {
    color: var(--color-brand);
    @apply sm:text-lg md:text-2xl;
  }
  :deep(.full-text) {
    @apply mt-2 tracking-tight leading-8
  }
</style>