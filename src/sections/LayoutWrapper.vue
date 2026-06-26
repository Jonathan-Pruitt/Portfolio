<script setup>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import Proficiencies from './Proficiencies.vue';
import Projects from './Projects.vue';
import Endorsements from './Endorsements.vue';
import About from './About.vue';
import Footer from './Footer.vue';
import Debug from './Debug.vue';
import projects_svg from '/src/assets/icons/tags/projects.svg?component';
import about_svg from '/src/assets/icons/tags/about-me.svg?component';
import proficiency_svg from '/src/assets/icons/tags/proficiency.svg?component';
import social_svg from '/src/assets/icons/tags/social.svg?component';

const navList = [
  {
    title: 'proficiencies',
    icon: proficiency_svg
  },
  {
    title: 'projects',
    icon: projects_svg
  },
  {
    title: 'endorsements',
    icon: social_svg
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
      <!-- <Debug /> -->
      <Hero 
        section-id="home"
        class=""
      />
      <Proficiencies 
      class="sm:pb-24 border-l-4 sm:border-l-16 md:border-l-24 border-yellow-200/75"
      :section-id="navList[0].title"
      />
      <Projects 
      class="sm:pb-24 border-l-4 sm:border-l-16 md:border-l-24 border-blue-200/75"
      :section-id="navList[1].title"
      />
      <Endorsements 
      class="sm:pb-24 border-l-4 sm:border-l-16 md:border-l-24 border-red-200/75"
      :section-id="navList[2].title"
      />
      <About 
      class="sm:pb-16"
      :section-id="navList[3].title"
      />
    </main>
  <Footer 
    
  />
</template>