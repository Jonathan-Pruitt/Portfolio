<script setup>
import { ref } from 'vue';
import Carousel from './components/Carousel.vue';
import projectData from "../assets/data/projects.json"
import Tag from './partials/Tag.vue';

const projects = ref(projectData)

</script>

<template>
  <section id="projects">
    <div class="sm:flex flex-row sm:mx-8">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline pr-4">PROJECTS</h2>
      <div class="flex-1 grid lg:grid-cols-2 gap-4">
        <div v-for="project in projects" class="mt-4 sm:mt-0 flex flex-wrap border-4">
          <!-- <div class="px-8 py-4 mx-4 w-full bg-flat rounded-2xl"> -->
          <div class="w-full bg-flat rounded-2xl">
            <h3 class="text-3xl font-bold">{{ project.title }}</h3>
            <Carousel 
              class="mx-auto"
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
              <div class="flex-1">
                <h4 class="text-sm">Tech Stack</h4>
                <ul class="flex-1 flex flex-wrap text-left">
                  <li 
                    v-for="item in project.techStack"
                  >
                    <Tag :tag="item"/>
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <h4 class="text-sm text-right">Tags</h4>
                <ul class="flex-1 flex flex-wrap flex-row-reverse">
                  <li 
                    v-for="tag in project.tags"
                  >
                    <Tag :tag="tag" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>