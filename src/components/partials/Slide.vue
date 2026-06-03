<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  slideData: Object,
  type: String,
})

</script>

<template>
  <div 
    v-if="type === 'project'"
    class="w-full h-full relative"
  >
    <img 
      :src="slideData.path" 
      :alt="slideData.altText"
      class="w-full h-full object-cover rounded-lg"
    >
  </div>
</template>