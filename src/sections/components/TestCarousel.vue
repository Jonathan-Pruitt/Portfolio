<script setup>
import { ref } from 'vue';
import ProjectSlide from './ProjectSlide.vue';
import EndorsementSlide from './EndorsementSlide.vue';

const props = defineProps({
  cards: Array,
  type: String
});

const currentIndex = ref(0);
const scrollContainer = ref(null);

// Tracks which item is currently snapped into view
const handleScroll = (e) => {
  const container = e.target;
  const width = container.clientWidth;
  // Calculates the current index based on horizontal scroll position
  currentIndex.value = Math.round(container.scrollLeft / width);
};

// Allows dot indicators to scroll the carousel into view
const scrollToSwipe = (index) => {
  if (!scrollContainer.value) return;
  const width = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollTo({
    left: index * width,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="w-full relative">
    <div class="">

      <ul 
        v-if="type == 'projects'"
        ref="scrollContainer"
        @scroll="handleScroll"
        class="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
      >
        <li
          v-for="card in cards"
          class=""
        >
          <ProjectSlide :slide-data="{
              path: 'https://picsum.photos/id/64/400/400',
              altText: 'A computer'
          }"/>
        </li>
      </ul>
      <ul 
        v-if="type == 'endorsements'"
        class="flex overflow-x-scroll snap-x snap-mandatory"
      >
        <li
          v-for="card in cards"
          class=""
        >
          <EndorsementSlide :card-data="card"/>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
      <div class="rounded-lg px-1 flex gap-2 bg-gray-500/50">
        <button
          v-for="(_, index) in cards"
          :key="index"
          @click="scrollToSwipe(index)"
          class="w-2 h-2 rounded-full transition-all duration-200"
          :class="index === currentIndex ? 'bg-white' : 'bg-white/50'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
  flex: 0 0 100%;
  scroll-snap-align: center;
}

/* Hides scrollbar visual clutter while retaining swipe functionality */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

</style>