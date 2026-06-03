<script setup>
import { ref } from 'vue';
import projectData from "../assets/data/projects.json"

const projects = ref(projectData)
//create a carousel handler here
</script>

<template>
  <section id="projects">
    <div class="md:flex flex-row">
      <h2 class="text-5xl font-black md:vertical-text md:tracking-[-0.25em] inline">PROJECTS</h2>
      <div  v-for="project in projects" class="flex">
        <div class="flex-3">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <ul v-for="item in project.techStack">
            <li>{{ item }}</li>
          </ul>
          <ul v-for="tag in project.tags">
            <li>{{ tag }}</li>
          </ul>
        </div>
        <div class="flex-5">
          <div v-for="image in project.images" class="w-full aspect-video overflow-hidden rounded-xl">
            <img 
              :src="image.path"
              :alt="image.altText"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>