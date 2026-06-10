<script setup>
import { ref } from 'vue';

const props = defineProps({
  nav: Object // '#home' '#projects' '#about' '#footer'
})

const isScrolled = ref(false);

const capitalizeFirstChar = (text) => {
  // REMOVE LEADING # + CAPITALIZE FIRST CHAR
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0 ? true : false;
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <header class="">
    <!-- NAVBAR -->
    <nav 
      class="z-999 h-24 hover:h-24 transition-all duration-150 delay-100 bg-brand fixed top-0 left-0 right-0 text-header"
      :class="isScrolled ? 'scrolled' : ''"
    >
      <div class="flex h-full w-full content-center font-bold sm:text-lg md:text-xl lg:text-2xl">
        
        <!-- LOGO -->
        <a href="#home" class="h-full w-24 shrink-0 ml-4 hover:backdrop-brightness-115">
          <img src="../assets/icons/logo.png" alt="Jonathan Pruitt Dev Logo" class="brightness-150 h-full content-center mx-auto">
        </a>
        
        <!-- LINKS -->
        <div class="h-full flex w-full shrink">
          <a 
            v-for="navItem in nav"
            :href="'#'+navItem"
            class="sm:px-8 px-4 hover:brightness-115 bg-brand transition-all duration-200"
            >
            <div class="h-full content-center">{{ capitalizeFirstChar(navItem) }}</div>
          </a>
        </div>

      </div>
    </nav>
  </header>
</template>

<style scoped>
  nav.scrolled {
    height: calc(var(--spacing) * 8);
  }
</style>