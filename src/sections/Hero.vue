<script setup>
import SvgIcon from './partials/SvgIcon.vue';
import TechTag from './partials/TechTag.vue';
import { TechTagObject } from '../services/TechTagObject.js';

const props = defineProps({
  sectionId: String
})
const coreList = [];
const proficientList = [];
const familiarist = [];
const techTagList = [
  'csharp', 
  'css',
  'github',
  'html',
  'javascript', 
  'laravel',
  'linear',
  'linux',
  'mysql',
  'php',
  'python',
  'react', 
  'tailwind',
  'vue',
  'windows',
  'wpf',
  'xaml',
]

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

      </div>
      <!-- PROFICIENT TECH (INDEPENDENT WORK, NOT YET ADVANCED [BUILD FROM SCRATCH/TEACH]) -->
      
      <!-- BASIC/FAMILIAR TECH (UNDERSTAND CORE CONCEPTS AND HAVE SOME EXPERIENCE) -->
      
      <div class="border-2">
        <h3>Tech Experinece</h3>
        <h4 class="">
          Core Competencies 
          <em class="italic text-xs text-body">
            Technologies I use independently to design, build, and deliver production-ready projects with minimal oversight (other than code reivew).
          </em>
        </h4>
        <h4 class="">
          Proficient
          <em class="italic text-xs text-body">
            Technologies applied successfully in personal or hobby projects where I can build functional applications independently.
          </em>
        </h4>
        <h4 class="">
          Familiar 
          <em class="italic text-xs text-body">
            Technologies I have conceptual knowledge of and basic hands-on experience with through limited project exposure.
          </em>
        </h4>
        <div class="grid grid-cols-3 ">
          <div
            v-for="id, index in techTagList"
            class="border"
          >
            <TechTag 
              :tag="new TechTagObject(id).getTechTagItem()"
              size="xs"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>