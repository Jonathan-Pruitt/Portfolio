<script setup>
import SectionWrapper from './components/SectionWrapper.vue';
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import Proficiencies from './Proficiencies.vue';
import Projects from './Projects.vue';
import Endorsements from './Endorsements.vue';
import About from './About.vue';
import Footer from './Footer.vue';
import Debug from './Debug.vue';
import projects_svg from '@/assets/icons/tags/projects.svg?component';
import about_svg from '@/assets/icons/tags/about-me.svg?component';
import proficiency_svg from '@/assets/icons/tags/proficiency.svg?component';
import social_svg from '@/assets/icons/tags/social.svg?component';

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
      />
      <!--------------------- PROFICIENCIES --------------------->
      <SectionWrapper 
        title="PROFICIENCIES" 
        stripe-color="--color-proficiencies"
        subtitle="An overview of my $*tools$ and how $*frequently$ I use them"
      >
        <Proficiencies :section-id="navList[0].title"/>
      </SectionWrapper>
      <!--------------------- PROJECTS --------------------->
      <SectionWrapper 
        title="PROJECTS" 
        stripe-color="--color-projects"
        subtitle="Check out some of the $*projects$ I've worked on"
      >
        <Projects :section-id="navList[1].title"/>
      </SectionWrapper>
      <!--------------------- ENDORSEMENTS --------------------->
      <SectionWrapper 
        title="ENDORSEMENTS" 
        stripe-color="--color-endorsements"
        subtitle="Here are some $*testimonials$ about my $*work ethic$"
      >
        <Endorsements :section-id="navList[2].title"/>
      </SectionWrapper>
      <!------------------- SPLASH IMAGE ------------------->
      <div class="bg-[#6c85a4] border-y-4 border-brand">
        <div 
          class="
            w-full
            sm:h-[300px]
            h-[150px]
            bg-top
            bg-[url(/images/big-sky.png)] 
            sm:bg-center
            bg-no-repeat
          ">
        </div>
      </div>
      <!--------------------- ABOUT ME --------------------->
      <SectionWrapper 
        title="WHO I AM" 
        stripe-color="--color-about"
        subtitle="A little bit about me and my $*background$"
      >
        <About :section-id="navList[3].title"/>
      </SectionWrapper>
    </main>
  <Footer 
    
  />
</template>