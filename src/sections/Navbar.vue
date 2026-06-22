<script setup>
import { ref } from 'vue';

const props = defineProps({
  nav: Array // '#home' '#projects' '#about' '#footer'
})

const isScrolled = ref(false);

const capitalizeFirstChar = (text) => {
  // CAPITALIZE FIRST CHAR
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
      class="z-999 h-24 transition-all duration-150 delay-100 bg-brand fixed top-0 left-0 right-0 text-header"
      :class="isScrolled ? 'scrolled' : ''"
    >
      <div class="flex h-full w-full content-center">
        
        <!-- LOGO -->
        <a href="#home" 
          class="h-24 w-18 sm:size-24 shrink-0 self-center content-center hover:backdrop-brightness-115"
        >
          <img 
            src="../assets/icons/logo.png" 
            alt="Jonathan Pruitt Dev Logo" 
            class="brightness-150 h-3/4 w-full sm:h-full sm:w-full content-center mx-auto transition-all duration-300 ease-out"
            :class="isScrolled ? 'sm-logo' : ''"
          >
        </a>
        
        <!-- LINKS -->
        <div class="h-full flex w-full shrink-0">
          <a 
            v-for="navItem in nav"
            :href="'#'+navItem.title"
            class="px-4 hover:brightness-115 bg-brand transition-all duration-200"
            :title="capitalizeFirstChar(navItem.title)"
            >
            <div class="h-full items-center flex gap-2">
              <component :is="navItem.icon" class="size-8 sm:size-6 md:size-8"/>
              <span class="hidden font-bold sm:block md:text-xl lg:text-2xl">{{ capitalizeFirstChar(navItem.title) }}</span>
            </div>
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

  .sm-logo {
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
  }
</style>