<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  image: Object,
  id: Number
})

const size = ref('/250/300')

const setPath = () => {
  const width = Math.floor(Math.random() * 7) * 50 + 250
  const height = Math.floor(Math.random() * 7) * 50 + 250
  size.value = '/' + width + '/' + height
}

onMounted(() => {
  setPath()
})
</script>

<template>
  <!-- <img :src="image.path" :alt="image.altText"> -->
  <img :src="'https://picsum.photos/id/'+id+size" :alt="image.altText">
</template>