<script setup>
import Proficiency from './components/Proficiency.vue';
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

const prof = {
  title: "Proficient",
  description: "Can confidently build, debug, and deploy full features independently using pre-defined best practices."
}
const comf = {
  title: "Comfortable",
  description: "Possesses a solid foundational understanding and can regularly contribute to existing codebases"
}
const fami = {
  title: "Familiar",
  description: "Possess conceptual knowledge of these technologies and basic hands-on experience through limited project exposure"
}

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
    <!-- Proficiencies -->
     <div class="sm:ml-16">
      <h2 class="text-4xl sm:text-6xl font-black cursor-default">PROFICIENCIES</h2>
      <p 
        class="pt-8 md:text-2xl"
      >
        Let's break down my 
        <strong>tools</strong>
        and how
        <strong>frequently</strong>
        I use them
      </p>
    </div>
    <div 
    class="px-4 pb-12 mx-auto sm:w-xl"
    >
      <div 
        v-if="coreTags.length > 0"
      >
        <Proficiency :category="prof.title" :description="prof.description" :tags="coreTags"/>
      </div>

      <div 
        v-if="proficientTags.length > 0"
      >
        <Proficiency :category="comf.title" :description="comf.description" :tags="proficientTags"/>
      </div>
      <div 
        v-if="familiarTags.length > 0"
      >
        <Proficiency :category="fami.title" :description="fami.description" :tags="familiarTags" />
      </div>
    </div>
  </section>
</template>