<script setup>
import { ref } from 'vue';
import Carousel from './components/Carousel.vue';
import projectData from "../assets/data/projects.json"
import Tag from './partials/Tag.vue';

const props = defineProps({
  sectionId: String
})
const projects = ref(projectData)

</script>

<template>
  <section :id="sectionId">
    <div class="sm:flex flex-row sm:mx-8">
      <h2 class="text-5xl font-black sm:vertical-text sm:tracking-[-0.25em] inline pr-4 cursor-default">PROJECTS</h2>
      
      <div class="flex-1 grid lg:grid-cols-2 gap-4">
        
        <!-- PROJECTS LIST -->
        <div v-for="project in projects" class="mt-4 sm:mt-0 flex flex-wrap">

          <!-- PROJECT CONTAINER -->
          <div class="w-xs mx-auto bg-linear-to-t from-flat to-raised rounded-lg shadow-lg shadow-brand/20">
            <div class="w-2xs mx-auto grid grid-cols-3 gap-2 overflow">
              
              <!-- ROW 1 -->
              <div class="col-span-full">
                <a 
                  :href="project.links.sample" 
                  target="_blank" 
                  class="flex gap-2 items-center"
                >
                  <img :src="project.iconPath" class="size-8 sm:size-16" :alt="project.title + ' logo'">
                  <h3 class="text-2xl font-bold">{{ project.title }}</h3>
                </a>
              </div>
              <!-- ROW 2 -->
              <div class="col-span-1 content-center">
                <h4 class="text-xs text-center">Tech</h4>
                <ul class="flex flex-col">
                  <li
                    v-for="item in project.techStack"
                  >
                    <Tag :tag="item"/>
                  </li>
                </ul>
              </div>
              <div class="col-span-2">
                <Carousel 
                  :slides="project.images"
                />
              </div>
              <!-- ROW 3 -->
              <div class="col-span-2">
                <p class="font-light text-sm">{{ project.description }}</p>
              </div>
              <div class="col-span-1 content-center">
                <h4 class="text-xs text-center">Tags</h4>
                <ul class="flex flex-col">
                  <li 
                    v-for="tag in project.tags"
                  >
                    <Tag :tag="tag" />
                  </li>
                </ul>
              </div>
              <div 
                v-if="project.disclaimer"
                class="col-span-full"
              >
                <p 
                  class="text-xs text-gray-500/60 italic my-2"
                  :class="project.disclaimer ? 'mb-4' : ''"
                >
                  {{ project.disclaimer ?? '' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>