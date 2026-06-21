<script setup>
import SvgIcon from './partials/SvgIcon.vue';
import TechTag from './partials/TechTag.vue';
import { TechTagObject } from '../services/TechTagObject.js';
import { onMounted, ref } from 'vue';

// STATIC DATA
const coreArray = [
  'github',
  'css',
  'html',
  'javascript',
  'laravel',
  'linear',
  'linux',
  'windows',
  'tailwind',
  'php',
  'vue',
];
const proficientArray = [
  'csharp',
  'python',
  'mysql',
  'xaml',
  'wpf'
];
const familiarArray = [
  'react',
];

// DATA
const props = defineProps({
  sectionId: String
})

const showDetails = ref('');
const coreTags = ref([]);
const proficientTags = ref([]);
const familiarTags = ref([]);

// METHODS
const getAllTags = () => {
  coreTags.value = getTagArray(coreArray);
  proficientTags.value = getTagArray(proficientArray);
  familiarTags.value = getTagArray(familiarArray);
}

const getTagArray = (stringArray) => {
  let tagArray = stringArray.map((rawTag) => new TechTagObject(rawTag).getTechTagItem())
  return tagArray;
}

const handleClickCategories = (category) => {
  if (category == showDetails.value) {
    showDetails.value = ''
  } else {
    showDetails.value = category
  }
}

onMounted(() => {
  getAllTags();
})
</script>

<template>
  <section :id="sectionId">
    <!-- EXPERIENCE -->
    <div class="border-2">
      <h3>Tech Experinece</h3>
      <div 
      v-if="coreTags.length > 0"
        class=""
      >
        <h4 class="">
          Core Competencies 
          <button 
            @click="handleClickCategories('core')"
            class="text-xs cursor-pointer text-info"
          >
            {{ showDetails != 'core' ? ' more' : ' less' }}
          </button>
          <em 
            class="italic text-xs text-body transition-opacity duration-75"
            :class="showDetails == 'core' ? 'visible opacity-100' : 'hidden opacity-0'"
          >
            Technologies I use independently to design, build, and deliver production-ready projects with minimal oversight (other than code reivew).
          </em>
        </h4>
        <div class="grid grid-cols-2">
          <div class=""
            v-for="tag in coreTags"
          >
            <div class="grid grid-cols-2 items-center">
              <div class="size-8 sm:size-12 md:size-16 justify-self-end box-content p-1 dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded sm:rounded-lg">
                <TechTag 
                  :tag="tag"
                />
              </div>
              <div class="dark:border-none border-subtle">
                <h5 class="font-semibold tracking-tight">{{ tag.title }}</h5>
                <p  class="text-sm text-content font-light">{{ tag.useFrequency }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        v-if="proficientTags.length > 0"
        class=""
      >
        <h4 class="">
          Proficient
          <button 
            @click="handleClickCategories('proficient')"
            class="text-xs cursor-pointer text-info"
          >
            {{showDetails != 'proficient' ? 'more' : 'less'}}
          </button>
          <em 
            class="italic text-xs text-body"
            :class="showDetails == 'proficient' ? 'visible opacity-100' : 'hidden opacity-0'"
          >
            Technologies applied successfully in personal or hobby projects where I can build functional applications independently.
          </em>
        </h4>
        <div class="grid grid-cols-2">
          <div class=""
            v-for="tag in proficientTags"
          >
            <div class="grid grid-cols-2 items-center">
              <div class="size-8 sm:size-12 md:size-16 justify-self-end box-content p-1 dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded sm:rounded-lg">
                <TechTag 
                  :tag="tag"
                />
              </div>
              <div class="dark:border-none border-subtle">
                <h5 class="font-semibold tracking-tight">{{ tag.title }}</h5>
                <p  class="text-sm text-content font-light">{{ tag.useFrequency }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        v-if="proficientTags.length > 0"
        class=""
      >
        <h4 class="">
          Familiar 
          <button 
            @click="handleClickCategories('familiar')"
            class="text-xs cursor-pointer text-info"
          >
            {{showDetails != 'familiar' ? 'more' : 'less'}}
          </button>
        </h4>
        <em 
          class="italic text-xs text-body tracking-tight"
          :class="showDetails == 'familiar' ? 'visible opacity-100' : 'hidden opacity-0'"
        >
          Technologies I have conceptual knowledge of and basic hands-on experience with through limited project exposure.
        </em>
        <div class="grid grid-cols-2">
          <div class=""
            v-for="tag in familiarTags"
          >
            <div class="grid grid-cols-2 items-center">
              <div class="size-8 sm:size-12 md:size-16 justify-self-end box-content p-1 dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded sm:rounded-lg">
                <TechTag 
                  :tag="tag"
                />
              </div>
              <div class="dark:border-none border-subtle">
                <h5 class="font-semibold tracking-tight">{{ tag.title }}</h5>
                <p  class="text-sm text-content font-light">{{ tag.useFrequency }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>