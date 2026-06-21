<script setup>
import { onMounted, ref } from 'vue';
import endorsements from '../assets/data/social-proof.json';
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
      <h2 class="text-5xl font-black cursor-default">Endorsements</h2>
      <TestCarousel type="endorsements" :cards="shuffledEndorsements"/>
    </section>
</template>