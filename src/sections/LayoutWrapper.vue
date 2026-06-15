<script setup>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import Projects from './Projects.vue'
import About from './About.vue';
import Footer from './Footer.vue';
import Debug from './Debug.vue';
import projects_svg from '/src/assets/icons/tags/projects.svg?component';
import about_svg from '/src/assets/icons/tags/about-me.svg?component';

const navList = [
  {
    title: 'projects',
    icon: projects_svg
  },
  {
    title: 'about',
    icon: about_svg
  }
]
</script>

<template>
  <Navbar 
    :nav="navList" 
  />
    <!-- rescue -- cool dropping things go here  -->
    <!-- probably best bet to use 'hue-rotate' combined with 'mask' to play with colors -->
    <main>
      <Debug />
      <Hero 
        section-id="home"
      />
      <Projects 
        class="border-l-4 border-tech/50"
        :section-id="navList[0].title"
      />
      <About 
        :section-id="navList[1].title"
      />
    </main>
  <Footer 
    
  />
</template>