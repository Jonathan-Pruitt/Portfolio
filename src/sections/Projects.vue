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
    <h2 class="text-4xl sm:text-6xl lg:ml-16 transition sm:absolute sm:vertical-text sm:tracking-[-0.25em] inline cursor-default font-black">
      PROJECTS
    </h2>
    <div class="max-w-4xl mx-auto sm:flex pb-12 sm:px-24">
      
      <div class="mx-auto my-4">
        <p 
          class="pt-4 sm:pt-0 md:text-xl"
        >
          Check out some of the 
          <strong>projects</strong>
          I've worked on
        </p>
        <div class="min-w-2xs">
          <!-- PROJECTS LIST -->
          <div v-for="project in projects" class="">
            <ProjectItem 
              :project="project" 
              :max-tech-items="maxTechItems"
              @update-max-tech="handleMaxTechCount"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>