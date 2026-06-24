<script setup>
import { ref } from 'vue';
import ProjectSlide from './ProjectSlide.vue';
import EndorsementSlide from './EndorsementSlide.vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  type: String
})

const currentIndex = ref(0);
const scrollContainer = ref(null);

// Tracks which item is currently snapped into view
const handleScroll = (e) => {
  const container = e.target;
  const width = container.clientWidth;
  // Calculates the current index based on horizontal scroll position
  currentIndex.value = Math.round(container.scrollLeft / width);
};

// Allows dot indicators to scroll the carousel view
const scrollToSwipe = (index) => {
  if (!scrollContainer.value) return;
  const width = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollTo({
    left: index * width,
    behavior: 'smooth'
  });
};

const handleClick = (newIndex) => {
  currentIndex.value = (props.slides.length + newIndex) % props.slides.length;
  const width = scrollContainer.value.clientWidth;
  scrollContainer.value.scrollTo({
    left: currentIndex.value * width,
    behavior: 'smooth'
  });
}
</script>

<template>
  <div class="w-full relative">
      <div 
          ref="scrollContainer"
          class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          @scroll="handleScroll"
      >
          <div 
              v-for="(slide, index) in slides"
              :key="index"
              class="w-full shrink-0 snap-center flex items-center justify-center"
          >
            <div 
              v-if="type == 'projects'"
              class="relative"
            >
              <ProjectSlide :slide-data="slide"/>
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div class="rounded-lg px-1 flex gap-2 bg-gray-500/50">
                  <button
                    v-for="(_, index) in slides"
                    :key="index"
                    @click="scrollToSwipe(index)"
                    class="w-2 h-2 rounded-full transition-all duration-200"
                    :class="index === currentIndex ? 'bg-white' : 'bg-white/50'"
                  />
                </div>
              </div>
              <div class="absolute inset-y-0 left-0 content-center w-1/15">
                <button
                  @click="handleClick(currentIndex - 1)"
                  class="w-full h-1/5 transition-all duration-200 rounded-r border-black border border-l-0 bg-linear-to-r from-transparent to-white opacity-50 hover:opacity-95"
                >
                  <
                </button>
              </div>
              <div class="absolute inset-y-0 right-0 content-center w-1/15">
                <button
                  @click="handleClick(currentIndex + 1)"
                  class="w-full h-1/5 transition-all duration-200 rounded-l border-black border border-r-0 bg-linear-to-r from-transparent to-white opacity-50 hover:opacity-95"
                >
                  >
                </button>
              </div>
            </div>
            <div 
              v-if="type == 'socials'"
              class=""
            >
              <EndorsementSlide 
                :slide-data="''"
              />
            </div>
          </div>
      </div>
      <!-- <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div class="rounded-lg px-1 flex gap-2 bg-gray-500/50">
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="scrollToSwipe(index)"
            class="w-2 h-2 rounded-full transition-all duration-200"
            :class="index === currentIndex ? 'bg-white' : 'bg-white/50'"
          />
        </div>
      </div>
      <div class="absolute inset-y-0 left-0 content-center w-1/15">
        <button
          @click="handleClick(currentIndex - 1)"
          class="w-full h-1/5 transition-all duration-200 rounded-r border-black border border-l-0 bg-linear-to-r from-transparent to-white opacity-50 hover:opacity-95"
        >
          <
        </button>
      </div>
      <div class="absolute inset-y-0 right-0 content-center w-1/15">
        <button
          @click="handleClick(currentIndex + 1)"
          class="w-full h-1/5 transition-all duration-200 rounded-l border-black border border-r-0 bg-linear-to-r from-transparent to-white opacity-50 hover:opacity-95"
        >
          >
        </button>
      </div> -->
  </div>

</template>

<style scoped>
/* Hides scrollbar visual clutter while retaining swipe functionality */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>