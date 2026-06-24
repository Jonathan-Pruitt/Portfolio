<script setup>
import { onMounted, ref } from 'vue';
import endorsements from '../assets/data/endorsements.json';
import TestCarousel from './components/TestCarousel.vue';

const title = '#'

const props = defineProps({
  sectionId: String
})

// DATA
const shuffledEndorsements = ref([]);

// METHODS
const shuffle = (array) => {
  // FISHER-YATES SHUFFLE FUNCTION
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

onMounted(() => {
  shuffledEndorsements.value = shuffle(endorsements);
})

</script>

<template>
    <section :id="sectionId">
      <div class="pb-4">
        <h2 class="text-4xl font-black cursor-default">ENDORSEMENTS</h2>
        <div class="my-8 mx-4 shadow-tag/30 shadow-xs dark:bg-linear-to-b dark:from-flat dark:via-brand/30 dark:via-25% dark:to-flat rounded-lg">
          <TestCarousel type="endorsements" :cards="shuffledEndorsements"/>
        </div>
      </div>
    </section>
</template>