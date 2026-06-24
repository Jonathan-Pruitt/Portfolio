<script setup>
import { computed, onMounted, ref } from 'vue';
import Carousel from './Carousel.vue';
import Modal from '../partials/Modal.vue';
import ProjectTagList from '../partials/ProjectTagList.vue';
import TechTag from '../partials/TechTag.vue';
import Tag from '../partials/Tag.vue';
import tagSvg from '/src/assets/icons/tags/tag.svg?component';
import techTagSvg from '/src/assets/icons/tags/tech.svg?component';
import { TechTagObject } from '/src/services/TechTagObject.js';

const props = defineProps({
  project: Object,
  maxTechItems: Number
})
const emit = defineEmits(['update-max-tech'])
const project = ref(props.project);
const techTags = ref([]);
const showDisclaimer = ref(false);

const COLORS = {
    "backend" :             'bg-[hsl(0,50%,50%)]/20 inset-ring-[hsl(0,50%,50%)] text-[hsl(0,50%,50%)]',
    "frontend" :            'bg-[hsl(216,50%,50%)]/20 inset-ring-[hsl(216,50%,50%)] text-[hsl(216,50%,50%)]',
    "framework" :           'bg-[hsl(144,70%,40%)]/20 inset-ring-[hsl(144,70%,40%)] text-[hsl(144,70%,40%)]',
    "version control" :     'bg-[hsl(288,50%,50%)]/20 inset-ring-[hsl(288,50%,50%)] text-[hsl(288,50%,50%)]',
    "project management":   'bg-[hsl(72,50%,40%)]/20 inset-ring-[hsl(72,50%,40%)] text-[hsl(72,50%,40%)]',
}

const TAG_COLORS = {
    "backend" :     'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :    'bg-[hsl(210,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :   'bg-[hsl(180,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "personal" :    'bg-[hsl(120,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "usage":        'bg-[hsl(320,50%,50%)]/20 inset-ring-[hsl(320,50%,50%)] text-[hsl(320,50%,50%)]',
    "professional": 'bg-[hsl(30,50%,40%)]/20 inset-ring-[hsl(30,50%,40%)] text-[hsl(30,50%,40%)]',
}

const maxLogos = computed(() => {
    if (!props.maxTechItems) {return 'grid-cols-1'}
    if (props.maxTechItems > 3) {return 'grid-cols-3'}
    return 'grid-cols-' + props.maxTechItems;
})

// METHODS

const loadTechTags = () => {
    const tags = project.value.techStack.map((tag) => new TechTagObject(tag).getTechTagItem())
    let maxTags = 0
    techTags.value.domains = {};
    const fEnd = tags.filter((t) => t.domain == 'frontend');
    const bEnd = tags.filter((t) => t.domain == 'backend');
    const frame = tags.filter((t) => t.domain == 'framework');
    const pMan = tags.filter((t) => t.domain == 'project management');
    const vCont = tags.filter((t) => t.domain == 'version control');

    addTags(fEnd);
    addTags(bEnd);
    addTags(frame);
    addTags(pMan);
    addTags(vCont);
    emit('update-max-tech', maxTags)

    function addTags(tagArray) {
        if (tagArray.length > 0) {
            const key = tagArray[0].domain
            // maxTagCount.value = Math.max(tagArray.length, maxTagCount.value)
            maxTags = Math.max(tagArray.length, maxTags)
            techTags.value[key] = tagArray;
        }
    }
}

const capitalizeFirstChar = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

onMounted(() => {
    loadTechTags();
    // emit('update-max-tech', maxTagCount.value)
})

</script>

<template>
  <!-- PROJECT CONTAINER -->
  <div class="mx-auto mt-8 bg-peak rounded-lg shadow-lg dark:inset-shadow-sm dark:inset-shadow-gray-500/50 dark:bg-linear-to-b dark:from-base dark:via-brand/30 dark:via-15% dark:to-base">
    <div class="w-full p-4">
        
      <!-- Header -->
      <div 
      :title="'Try out ' + project.title"
      class="flex"
      >
        <a 
          :href="project.links.sample || '#'" 
          target="_blank" 
          class="flex gap-2 items-center hover:scale-105 transition-all duration-150"
        >
          <img :src="project.iconPath" class="size-8 sm:size-16 rounded-lg dark:bg-blue-300/20" :alt="project.title + ' logo'">
          <h3 class="text-xl font-bold tracking-wider">{{ project.title }}</h3>
        </a>
      </div>
      
      <!-- Carousel -->
      <div class="">
        <Carousel 
          :slides="project.images"
          type="projects"
        />
      </div>

      <!-- Description -->
       <div class="mt-4">
        <p class="font-light text-sm">{{ project.description }}{{ project.disclaimer ? '*' : '' }}</p>
      </div>

      <!-- Tech Tags -->
      <div class="my-4">
        <div class="w-2/5 flex mx-auto justify-center border-b border-brand-muted"> 
          <techTagSvg class="size-6 fill-body/75" />
          <h4 class="text-body/75">Tech</h4>
        </div>

        <div v-if="techTags.frontend">
          <ProjectTagList 
            :tag-array="techTags.frontend"
            title="Frontend"
            :max-logos="maxLogos"
          />
        </div>
        <div v-if="techTags.backend">
          <ProjectTagList 
            :tag-array="techTags.backend"
            title="Backend"
            :max-logos="maxLogos"
          />
        </div>
        
        <div v-if="techTags.framework">
          <ProjectTagList
            :tag-array="techTags.framework"
            title="Framework"
            :max-logos="maxLogos"
          />
        </div>

        <div v-if="techTags['version control']">
          <ProjectTagList
            :tag-array="techTags['version control']"
            title="Versioning"
            :max-logos="maxLogos"
          />
        </div>

        <div v-if="techTags['project management']">
          <ProjectTagList
            :tag-array="techTags['project management']"
            title="Project Mgmt"
            :max-logos="maxLogos"
          />
        </div>
      </div>
          
      <!-- Descriptive Tags -->
      <div class="my-4">
        <div class="w-2/5 flex mx-auto justify-center border-b border-brand-muted">
          <tagSvg class="size-6 fill-body/75" />
          <h4 class="text-body/75">Tags</h4>
        </div>
        <div class="grid grid-cols-3">
          <div class="text-center mx-auto"
            v-for="tag in project.tags"  
          >
            <div class="size-12 mx-auto">
              <Tag 
                :tag="tag"
                class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
              />
            </div>
            <h6 
              class="text-xs font-semibold my-auto px-2 py-1 rounded-lg inset-ring-2 text-center mx-auto"
              :class="TAG_COLORS[tag.textIndicator]"
            >
              {{ tag.textIndicator }}
            </h6>
            <h6 class="text-xs text-body/75 font-content">{{ tag.title }}</h6>
          </div>
        </div>
      </div>
      
      <!-- Links / CTA -->
      <div class="flex justify-between">
        <div 
          v-if="project.links.sample"
          class="text-sm font-bold bg-gray-500 text-white my-2 rounded-lg border border-header px-2 py-1 hover:brightness-85 transition duration-150 text-center"
        >
          <a 
            :href="project.links.sample"
          >
            Try it
          </a>
        </div>
        <div 
        v-if="project.links.repo"
        class="text-sm font-bold bg-gray-500 text-white my-2 rounded-lg border border-header px-2 py-1 hover:brightness-85 transition duration-150 text-center"
        >
          <a 
            :href="project.links.repo"
          >
            Repo
          </a>
        </div>
        <!-- Disclaimer (if any) -->
        <div 
          v-if="project.disclaimer"
          class=""
        >
          <button
            class="text-sm font-bold bg-gray-500 text-white italic my-2 rounded-lg border border-header px-2 py-1 hover:brightness-85 transition duration-150"
            @click="showDisclaimer = true"
          >
            *Disclaimer
          </button>
        </div>
      </div>
    </div>
  </div>
  <Modal
    :show="showDisclaimer"
    @close="showDisclaimer = false"
  >
    <template #title>
      <h2 class="font-bold">
        Disclaimer
      </h2>
    </template>
    <template #content>
      <p>
        <em class="">
          {{ project.disclaimer }}
        </em>
      </p>
    </template>
  </Modal>
</template>