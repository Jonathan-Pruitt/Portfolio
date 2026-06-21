<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  slideData: Object,  // EXPECTED OBJECT KEYS => path, altText
});

</script>

<template>
  <div 
    class="px-2"
  >
    <img 
      :src="slideData.path" 
      :alt="slideData.altText"
      class="object-cover rounded-lg"
    >
  </div>
</template>