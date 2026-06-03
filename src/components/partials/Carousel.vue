<script setup>
import { ref } from 'vue';
import ProjectSlide from './ProjectSlide.vue';

const props = defineProps({
  slides : {
    type: Array,
    required: true,
    // EXPECTED STRUCTURE [{type: 'text'|'image', content: '...', 'title' : '...'}]
  }
  // imageSlides: Array,
  // type: String
})
const currentSlide = ref(0)

const changeSlide = () => {
  currentSlide.value += 1;
}
console.log()
</script>

<template>
  <div class="min-h-full overflow-hidden border border-subtle flex">
    <div v-for="(slide, index) in imageSlides" :class="`w-[${imageSlides.length}px]`">
      <ProjectSlide 
        :image="slide"
        :id="index * 10 + 0"
      />
    </div>
  </div>
  <button @click="changeSlide">
    change
  </button>
</template>