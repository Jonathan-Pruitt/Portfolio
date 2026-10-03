<script setup>
import ProficiencyItem from './components/ProficiencyItem.vue';
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

onMounted(() => {
  getAllTags();
})
</script>

<template>
  <section :id="sectionId">
    <!-- Proficiencies -->
    <div 
      v-if="coreTags.length > 0"
    >
      <ProficiencyItem :category="prof.title" :description="prof.description" :tags="coreTags"/>
    </div>

    <div 
      v-if="proficientTags.length > 0"
    >
      <ProficiencyItem :category="comf.title" :description="comf.description" :tags="proficientTags"/>
    </div>
    <div 
      v-if="familiarTags.length > 0"
    >
      <ProficiencyItem :category="fami.title" :description="fami.description" :tags="familiarTags" />
    </div>
  </section>
</template>