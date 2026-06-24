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
  console.log('something')
  if (!scrollContainer.value) return;
  const width = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollTo({
    left: index * width,
    behavior: 'smooth'
  });
};

const handleClick = (newIndex) => {
  currentIndex.value = (props.cards.length + newIndex) % props.cards.length;
  const width = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollTo({
    left: currentIndex.value * width,
    behavior: 'smooth'
  });
}
</script>

<template>
  <div class="w-full relative">
    <!-- <ul 
      v-if="type == 'projects'"
      ref="scrollContainer"
      @scroll="handleScroll"
      class="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar scroll-smooth scrollbar-none"
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
    </ul> -->
    <ul 
      v-if="type == 'endorsements'"
      ref="scrollContainer"
      class="flex overflow-x-scroll snap-x snap-mandatory"
      @scroll="handleScroll"
    >
      <li
        v-for="card in cards"
        class=""
      >
        <EndorsementSlide :card-data="card"/>
      </li>
    </ul>
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
    <div class="absolute inset-y-0 left-0 content-center w-1/15 max-w-6 min-w-2">
        <button
          @click="handleClick(currentIndex - 1)"
          class="w-full h-1/5 transition-all duration-200 rounded-r border-black border border-l-0 bg-linear-to-l from-transparent to-gray-500 opacity-30 hover:opacity-5s0"
        >
          <
        </button>
      </div>
      <div class="absolute inset-y-0 right-0 content-center w-1/15 max-w-6 min-w-2">
        <button
          @click="handleClick(currentIndex + 1)"
          class="w-full h-1/5 transition-all duration-200 rounded-l border-black border border-r-0 bg-linear-to-r from-transparent to-gray-500 opacity-30 hover:opacity-5s0"
        >
          >
        </button>
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