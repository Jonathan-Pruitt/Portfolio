<script setup>
import { onMounted, ref } from 'vue';
import ProjectItem from './components/ProjectItem.vue';
import projectData from "../assets/data/projects.json";
import { TechTagObject } from '../services/TechTagObject.js';

const props = defineProps({
  sectionId: String,
})
const projects = ref(projectData)
const maxTechItems = ref(0)

const handleMaxTechCount = (e) => {
  maxTechItems.value = Math.max(e, maxTechItems.value)
}
</script>

<template>
  <section :id="sectionId">
    <div class="sm:flex flex-row sm:mx-8">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline pr-4 cursor-default">PROJECTS</h2>
      
      <div class="flex-1 grid gap-4">
        
        <!-- PROJECTS LIST -->
        <div v-for="project in projects" class="mt-4 sm:mt-0 flex flex-wrap">
          <ProjectItem 
            :project="project" 
            :max-tech-items="maxTechItems"
            @update-max-tech="handleMaxTechCount"
          />
          <!-- ALL OF THE PROJECT STUFF GOES HERE -->
          <!-- ALL OF THE PROJECT STUFF GOES HERE -->
        </div>
      </div>
    </div>
  </section>
</template>