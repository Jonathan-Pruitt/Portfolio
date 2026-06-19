<script setup>
import Carousel from './components/Carousel.vue';
const title = '#'
  
</script>

<template>
  <section :id="title">
    <Carousel :slides="{path: '#', altText: 'placeholder text'}"/>
  </section>
</template>