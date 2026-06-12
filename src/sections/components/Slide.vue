<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  slideData: Object,
  type: String,
});

</script>

<template>
  <div 
    v-if="type === 'projects'"
    class="px-2"
  >
    <img 
      :src="slideData.path" 
      :alt="slideData.altText"
      class="object-cover rounded-lg"
    >
  </div>
</template>