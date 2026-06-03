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
  <div class="relative w-full max-w-2xl mx-auto overflow-hidden">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex*100}%)`}"
      >
      <div 
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full shrink-0 flex items-center justify-center px-2 text-center"
      >
        <Slide 
          :slide-data="slide"
          type="project"
        />
      </div>
    </div>
    <button class="absolute bottom-5 left-5 mx-6 text-white" @click="changeSlide(-1)">
      prev
    </button>
    <button class="absolute bottom-5 right-5 mx-6 text-white" @click="changeSlide(1)">
      next
    </button>
  </div>
</template>