<script setup>
import { onMounted, ref } from 'vue';
import { TextFormatService } from '../../services/TextFormatService';

const props = defineProps({
  cardData: Object,
});

// DATA
const fullText = props.cardData.content.full;
const highlights = ref('');
const altText = props.cardData.image.altText || `${props.cardData.name} -- Headshot`

// METHODS
const formatHighlights = () => {
  highlights.value = TextFormatService.insertRichText(props.cardData.content.highlights);
  highlights.value = "<p>&quot;" + highlights.value + "&quot;</p>"
}

onMounted(() => {
  formatHighlights();
})
</script>

<template>
  <div 
    class="w-full grid grid-rows-[auto_auto] sm:grid-rows-2 p-4 bg-linear-to-b from-flat via-brand/50 via-25% to-flat rounded-lg"
  >
    <div class="flex">
      <div class="sm:flex gap-4">
      <!-- <div class="sm:grid sm:grid-cols-2 sm:w-1/2"> -->
        <div class="shrink">
          <img :src="cardData.image.path" :alt="altText"
            class="w-24 aspect-square rounded-full ring-4"
          >
        </div>
        <div class="shrink">
          <h3 class="text-lg font-semibold">{{ cardData.name }}</h3>
          <h4 class="brightness-80 font-medium">{{ cardData["current-role"].title }}</h4>
          <h4 class="brightness-80 font-medium">{{ cardData["current-role"].organization }}</h4>
        </div>

      </div>
      <div class="grow text-end">
        <button class="bg-gray-500">See More</button>
      </div>

    </div>
    <div class="bg-raised rounded-lg px-4 py-2 text-sm sm:text-none md:text-lg">
      <div v-html="highlights"/>
    </div>
  </div>
</template>

<style scoped>
  @reference 'tailwindcss';
  :deep(p strong) {
    color: var(--color-brand);
    @apply sm:text-lg md:text-xl;
  }
</style>