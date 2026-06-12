<script setup>
import SvgIcon from './partials/SvgIcon.vue';

const props = defineProps({
  sectionId: String
})
</script>

<template>
  <section :id="sectionId">
    <div class="container mx-auto min-h-screen flex flex-col place-content-center">
      <div class="sm:grid sm:grid-cols-2 p-4 m-4">
        
        <!-- Right side -->
        <div class="sm:order-2">
          <img src="../assets/images/hero-jp.png" alt="Jonathan Pruitt" class="rounded-full border-10 border-header mx-auto sm:ml-0" />
        </div>

        <!-- Left side -->
        <div class="text-center content-center sm:text-right px-2 relative sm:order-1">
          <h1 class="text-5xl md:text-6xl font-black tracking-tight mb-2">JONATHAN PRUITT</h1>
          <h2 class="text-xl text-body font-content font-light italic tracking-widest mb-4">Full Stack Developer</h2>
          <div class="text-brand text-5xl">
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

        <!-- PROFICIENT TECH (INDEPENDENT WORK, NOT YET ADVANCED [BUILD FROM SCRATCH/TEACH]) -->
        <ul class="w-xs mx-auto grid grid-cols-5 shadow-lg shadow-brand/20 rounded-lg">
          c# JS React HTML CSS Python MySQL XAML WPF PHP Laravel Tailwind Vue
          MakeEachItemRaisedOrPeak
        </ul>

        <!-- BASIC/FAMILIAR TECH (UNDERSTAND CORE CONCEPTS AND HAVE SOME EXPERIENCE) -->
      </div>
    </div>
  </section>
</template>