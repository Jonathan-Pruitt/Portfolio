<script setup>
import { ref } from 'vue';
import Carousel from './partials/Carousel.vue';
import projectData from "../assets/data/projects.json"

const projects = ref(projectData)

</script>

<template>
  <section id="projects">
    <div class="sm:flex flex-row mx-2">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline">PROJECTS</h2>
      <div v-for="project in projects" class="">
        <h3 class="text-3xl font-bold">{{ project.title }}</h3>
        <Carousel 
          :slides="project.images"
        />
        <p>{{ project.description }}</p>
        <ul v-for="item in project.techStack">
          <li>{{ item }}</li>
        </ul>
        <ul v-for="tag in project.tags">
          <li>{{ tag }}</li>
        </ul>
      </div>
      <!-- <div v-for="project in projects" class="flex">
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
          <Carousel 
            :slides="project.images"
          />
        </div>
      </div> -->
    </div>
  </section>
</template>