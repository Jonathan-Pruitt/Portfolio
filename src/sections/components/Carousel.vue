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

</script>

<template>
  <div class="w-[360px] sm:w-100">
    <div class="w-full flex overflow-x-scroll snap-x snap-mandatory">
      <div class="snap-center shrink-0"
        v-for="(slide, index) in slides"
      >
        <Slide 
        :slide-data="slide"
        type="project"
        />
      </div>
    </div>
  </div>
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
</template>