<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  slideData: Object,  // EXPECTED OBJECT KEYS => path, altText
});

</script>

<template>
  <div 
    class="w-full"
  >
    <img 
      :src="slideData.path" 
      :alt="slideData.altText"
      class="object-cover rounded-lg w-100"
    >
  </div>
</template>