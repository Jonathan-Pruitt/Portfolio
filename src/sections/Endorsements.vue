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
        <div class="sm:ml-16">
          <h2 class="text-4xl sm:text-6xl font-black cursor-default">ENDORSEMENTS</h2>
          <p 
            class="pt-8 md:text-2xl"
          >
            Here are some 
            <strong>testimonials</strong>
            about my
            <strong>work ethic</strong>
          </p>
          <p class="text-sm md:text-lg text-subtle">
            <em>
              All endorsements are visible on my
              <a 
              href="https://linkedin.com/in/jonathan-pruitt-developer" 
              target="_blank"
              class="underline text-brand-muted"
              >
                LinkedIn
              </a>
            </em>
          </p>
        </div>
        <div class="max-w-3xl min-w-2xs mx-auto">
          <div class="my-8 mx-4 shadow-lg dark:bg-linear-to-b dark:from-flat dark:via-brand/15 dark:via-25% dark:to-flat rounded-lg">
            <TestCarousel type="endorsements" :cards="shuffledEndorsements"/>
          </div>
        </div>
      </div>
    </section>
</template>