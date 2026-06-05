<script setup>
import { ref } from 'vue';
import Carousel from './components/Carousel.vue';
import projectData from "../assets/data/projects.json"

const projects = ref(projectData)

</script>

<template>
  <section id="projects">
    <div class="sm:flex flex-row mx-4 sm:mx-8">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline pr-4">PROJECTS</h2>
      <div v-for="project in projects" class="mt-4 sm:mt-0 flex flex-wrap">
        <div class="px-8 py-4 mx-4 bg-flat rounded-2xl">
          <h3 class="text-3xl font-bold">{{ project.title }}</h3>
          <Carousel 
            :slides="project.images"
          />
          <p class="mt-2 pt-2 font-light">{{ project.description }}</p>
          <p 
            class="text-xs text-gray-500/60 italic my-2"
            :class="project.disclaimer ? 'mb-4' : ''"
          >
            {{ project.disclaimer ?? '' }}
          </p>
          <div class="flex">
            <ul class="flex-1 flex flex-wrap text-left">
              <li 
                v-for="item in project.techStack"
                class="mx-1 my-auto py-1 px-2 font-semibold text-tech text-xs rounded-lg bg-tech/30 ring-tech inset-ring-2"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="flex-1 flex flex-wrap flex-row-reverse">
              <li 
                v-for="tag in project.tags"
                class="mx-1 my-auto py-1 px-2 font-semibold text-xs text-tag  bg-tag/30 rounded-lg ring-tag inset-ring-2"
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