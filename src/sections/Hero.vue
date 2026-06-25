<script setup>
import SvgIcon from './partials/SvgIcon.vue';

const props = defineProps({
  sectionId: String
});
</script>

<template>
  <section :id="sectionId">
    <div class="bg-radial from-brand/30 to-base to-70%">
    <div class="mx-auto min-h-screen flex flex-col place-content-center">
      <div class="sm:grid sm:grid-cols-2 p-4 m-4">
        
        <!-- Right side -->
        <div class="sm:order-2">
          <img 
          src="../assets/images/hero-jp.png" 
          alt="Jonathan Pruitt" 
          class="rounded-full border-10 border-header mx-auto sm:m-0 w-2xs"/>
        </div>

        <!-- Left side -->
        <div class="text-center content-center sm:text-right px-2 relative sm:order-1">
          <h1 class="text-4xl sm:text-6xl font-black tracking-tight mb-2">JONATHAN PRUITT</h1>
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-body font-content font-light italic tracking-widest mb-4">Full Stack Developer</h2>
          <div class="text-brand">
            <a href="https://github.com/Jonathan-Pruitt" target="_blank" class="ml-2">
              <SvgIcon class="hover:brightness-75 transition-all duration-200" size="md" name="github"/>
            </a>
            <a href="https://linkedin.com/in/jonathan-pruitt-developer" target="_blank" class="ml-2">
              <SvgIcon class="hover:brightness-75 transition-all duration-200" size="md" name="linkedin"/>
            </a>
            <a href="https://www.youtube.com/@BTWJ-stream" target="_blank" class="ml-2">
              <SvgIcon class="hover:brightness-75 transition-all duration-200" size="md" name="youtube"/>
            </a>
          </div>
        </div>

      </div>
    </div>
    </div>
  </section>
</template>