<script setup>
  import Navbar from './Navbar.vue';
  import Hero from './Hero.vue';
  import Projects from './Projects.vue'
  import About from './About.vue';
  import Footer from './Footer.vue';
  import Debug from './Debug.vue';
</script>

<template>
  <Navbar />
    <!-- rescue -- cool dropping things go here  -->
    <!-- probably best bet to use 'hue-rotate' combined with 'mask' to play with colors -->
    <main>
      <!-- <Debug /> -->
      <Hero />
      <Projects />
      <About />
    </main>
  <Footer />
</template>