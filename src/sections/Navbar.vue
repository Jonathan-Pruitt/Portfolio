<script setup>
const props = defineProps({
  nav: Object // '#home' '#projects' '#about' '#footer'
})
console.log(props.nav)
const capitalizeFirstChar = (text) => {
  // REMOVE LEADING # + CAPITALIZE FIRST CHAR
  return text.charAt(0).toUpperCase() + text.slice(1)
}
</script>

<template>
  <header class="">
    <nav class="z-999 h-16 sm:h-8 hover:h-24 transition-all duration-150 delay-100 bg-brand fixed top-0 left-0 right-0 text-header">
      <div class="flex h-full w-full content-center font-bold sm:text-lg md:text-xl lg:text-2xl">
        <a 
          v-for="navItem in nav"
          :href="'#'+navItem">
          <!-- <div class="h-full content-center">{{ navItem }}</div> -->
          <div class="h-full content-center">{{ capitalizeFirstChar(navItem) }}</div>
        </a>
      </div>
    </nav>
  </header>
</template>