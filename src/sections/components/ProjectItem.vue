<script setup>
import { computed, onMounted, ref } from 'vue';
import Carousel from './Carousel.vue';
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
// const maxTagCount = ref(0); 
const COLORS = {
    "backend" :             'bg-[hsl(0,50%,50%)]/20 inset-ring-[hsl(0,50%,50%)] text-[hsl(0,50%,50%)]',
    "frontend" :            'bg-[hsl(216,50%,50%)]/20 inset-ring-[hsl(216,50%,50%)] text-[hsl(216,50%,50%)]',
    "framework" :           'bg-[hsl(144,70%,40%)]/20 inset-ring-[hsl(144,70%,40%)] text-[hsl(144,70%,40%)]',
    "version control" :     'bg-[hsl(288,50%,50%)]/20 inset-ring-[hsl(288,50%,50%)] text-[hsl(288,50%,50%)]',
    "project management":   'bg-[hsl(72,50%,40%)]/20 inset-ring-[hsl(72,50%,40%)] text-[hsl(72,50%,40%)]',
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

                <div class="flex text-xs justify-center border-b border-brand/30">
                    <techTagSvg class="size-4 fill-gray-500/75" />
                    <h4 class="text-gray-500/75">Tech</h4>
                </div>
                <div v-if="techTags.frontend">
                    <h5 class="text-sm font-semibold">Frontend</h5>
                    <div class="grid" :class="maxLogos">
                        <TechTag 
                            v-for="frontendTag in techTags.frontend"
                            :tag="frontendTag"
                            class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                        />
                    </div>
                </div>
                <div v-if="techTags.backend">
                    <h5 class="text-sm font-semibold">Backend</h5>
                    <div class="grid" :class="maxLogos">
                        <TechTag 
                            v-for="backendTag in techTags.backend"
                            :tag="backendTag"
                            class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                        />
                    </div>
                </div>
                <div v-if="techTags.framework">
                    <h5 class="text-sm font-semibold">Framework</h5>
                    <div class="grid" :class="maxLogos">
                        <TechTag 
                            v-for="frameworkTag in techTags.framework"
                            :tag="frameworkTag"
                            class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                        />
                    </div>
                </div>
                <div v-if="techTags['version control']">
                    <h5 class="text-sm font-semibold">Versioning</h5>
                    <div class="grid" :class="maxLogos">
                        <TechTag 
                            v-for="versionTag in techTags['version control']"
                            :tag="versionTag"
                            class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                        />
                    </div>
                </div>
                <div v-if="techTags['project management']">
                    <h5 class="text-sm font-semibold">Project Mgmt</h5>
                    <div class="grid" :class="maxLogos">
                        <TechTag 
                            v-for="projectTag in techTags['project management']"
                            :tag="projectTag"
                            class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <Carousel 
                    :slides="project.images"
                    type="projects"
                />
            </div>
        
            <!-- ROW 3 -->
            <div class="col-span-2">
                <p class="font-light text-sm">{{ project.description }}</p>
            </div>
            <div class="col-span-1 content-center">
                <div class="flex text-xs justify-center border-b border-brand/30">
                    <tagSvg class="size-4 fill-gray-500/75" />
                    <h4 class="text-gray-500/75">Tags</h4>
                </div>
                <ul class="flex flex-col">
                    <li 
                        class="flex flex-wrap justify-center"
                    >
                    <Tag 
                        v-for="tag in project.tags"
                        :tag="tag" 
                    />
                    </li>
                </ul>
            </div>
            <!-- ROW 4 -->
            <div class="col-span-full flex flex-row-reverse gap-2">
              <div 
                v-if="project.links.sample"
                class="bg-peak rounded-lg hover:brightness-90 transition-all"
              >                
                <a 
                  :href="project.links.sample"
                  class="px-4 py-2"
                >
                  Check it out!
                </a>
              </div>
              <div 
                v-if="project.links.repo"
                class="bg-peak rounded-lg hover:brightness-90 transition-all"
              >                
                <a 
                  :href="project.links.repo"
                  class="px-4 py-2"
                >
                  See the code
                </a>
              </div>
            </div>
            <!-- ROW 5 -->
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
</template>