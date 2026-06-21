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
  <!-- <div class="w-full relative group"> -->
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
              class=""
            >
              <ProjectSlide :slide-data="slide"/>
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
  </div>

</template>

<style scoped>
/* Hides scrollbar visual clutter while retaining swipe functionality */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

<!-- 
<script setup>
import { ref } from 'vue';
import Slide from './Slide.vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
})
const currentIndex = ref(0)

const changeSlide = (val) => {
  currentIndex.value = (val + currentIndex.value+ props.slides.length) % props.slides.length;
}

const testScroll = () => {
  // FIGURE OUT HOW TO SET A BRIEF CHECK-BACK TIMER
  // const timer = setTimeout('something?', 300)
  console.log("scrolling")
}

</script>
             -->
<!--
ul {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100vw;

  height: 300px;
  padding: 20px;
  gap: 4vw;
}
li {
  flex: 0 0 100%;
  scroll-snap-align: center;
  
  padding: 20px;
  list-style-type: none;
}
-->
<!-- 
<template>
  <div class="w-full relative">
    <div class="flex overflow-x-scroll snap-x snap-mandatory" @scroll="testScroll">
      <div class="snap-center shrink-0"
        v-for="(slide, index) in slides"
      >
        <Slide 
        :slide-data="slide"
        type="project"
        />
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-1/10 mx-auto">
      <div class="mx-auto max-w-2/3 p-0.5 w-fit flex justify-center bg-gray-500/50 rounded-full">
        <div 
          class="mx-1"
          v-for="(_, index) in slides"
        >
          <div 
            class="size-2 bg-white mx-auto rounded-full" 
            :class="index != currentIndex ? 'bg-white/50' : ''"
          />
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="relative w-full max-w-2xl mx-auto overflow-hidden">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex*100}%)`}"
      >
      <div 
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full shrink-0 flex items-center justify-center text-center"
      >
        <Slide 
          :slide-data="slide"
          type="project"
        />
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-1/10 mx-auto">
      <div class="mx-auto max-w-2/3 p-0.5 w-fit flex justify-center bg-gray-500/50 rounded-full">
        <div 
          class="mx-1"
          v-for="(_, index) in slides"
        >
          <div 
            class="size-2 bg-white mx-auto rounded-full" 
            :class="index != currentIndex ? 'bg-white/50' : ''"
          />
        </div>
      </div>
    </div>
    <button class="absolute bottom-5 left-5 mx-6 text-white" @click="changeSlide(-1)">
      prev
    </button>
    <button class="absolute bottom-5 right-5 mx-6 text-white" @click="changeSlide(1)">
      next
    </button>
  </div> -->
<!-- </template> -->