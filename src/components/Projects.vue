<script setup>
import { ref } from 'vue';
import Carousel from './partials/Carousel.vue';
import projectData from "../assets/data/projects.json"

const projects = ref(projectData)

</script>

<template>
  <section id="projects">
    <div class="sm:flex flex-row mx-4 sm:mx-8 border-l-4 border-tech/50">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline pr-4">PROJECTS</h2>
      <div v-for="project in projects" class="mt-4 sm:mt-0">
        <div class="px-8 py-4 mx-4 bg-flat rounded-2xl">
          <h3 class="text-3xl font-bold">{{ project.title }}</h3>
          <Carousel 
            :slides="project.images"
          />
          <p class="my-2 py-2 font-light">{{ project.description }}</p>
          <div class="flex">
            <ul class="flex-1 text-left">
              <li 
                v-for="item in project.techStack"
                class="inline mx-1 p-1 font-semibold text-tech text-xs rounded-lg bg-tech/30 border-tech border-2"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="flex-1 text-right">
              <li 
                v-for="tag in project.tags"
                class="inline mx-1 p-1 font-semibold text-xs text-tag  bg-tag/30 rounded-lg  border-tag border-2"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>