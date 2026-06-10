<script setup>
  import Navbar from './Navbar.vue';
  import Hero from './Hero.vue';
  import Projects from './Projects.vue'
  import About from './About.vue';
  import Footer from './Footer.vue';
  import Debug from './Debug.vue';

  const navList = {
    projects: 'projects',
    about: 'about',
    footer: 'footer'
  }
</script>

<template>
  <Navbar :nav="navList"/>
    <!-- rescue -- cool dropping things go here  -->
    <!-- probably best bet to use 'hue-rotate' combined with 'mask' to play with colors -->
    <main>
      <Debug />
      <Hero 
        section-id="home"
      />
      <Projects 
        class="border-l-4 border-tech/50"
        :section-id="navList.projects"
      />
      <About 
        :section-id="navList.about"
      />
    </main>
  <Footer 
    :section-id="navList.footer"
  />
</template>