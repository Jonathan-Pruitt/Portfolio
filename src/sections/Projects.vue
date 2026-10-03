<script setup>
import { ref } from 'vue';
import ProjectItem from './components/ProjectItem.vue';
import projectData from "../assets/data/projects.json";
import ProjectThumbnail from './partials/ProjectThumbnail.vue';

const props = defineProps({
  sectionId: String,
})
const projects = ref(projectData)
const maxTechItems = ref(0)
const activeIndex = ref(0);
const activeProject = ref(projects.value[0]);

const handleMaxTechCount = (e) => {
  maxTechItems.value = Math.max(e, maxTechItems.value)
}

const handleProjectThumbnailClick = (projectIndex) => {
  activeIndex.value = projectIndex;
  activeProject.value = projects.value[projectIndex];
}
</script>

<template>
  <section :id="sectionId">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <a 
        v-for="(project, index) in projects" 
        class="hover:scale-105
          cursor-pointer smooth 
          shadow-lg dark:inset-shadow-sm dark:inset-shadow-gray-500/50"
        @click="handleProjectThumbnailClick(index)"
      >
        <ProjectThumbnail 
          :image-object="project.images[0]" 
          :title="project.title" 
          :snippet="project.snippet"
          :is-active="index == activeIndex"
        />
      </a>
    </div>
    <div class="min-w-2xs" id="project-item">

      <!-- SINGLE PROJECT VIEW -->
      <ProjectItem 
        :project="activeProject" 
        :max-tech-items="maxTechItems"
        @update-max-tech="handleMaxTechCount"
      />
      
    </div>
  </section>
</template>

<style scoped>
  #project-item {
    scroll-margin-top: 4rem;
  }
</style>