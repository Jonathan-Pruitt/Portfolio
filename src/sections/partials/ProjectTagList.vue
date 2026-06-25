<script setup>
import TechTag from './TechTag.vue';
const props = defineProps({
  tagArray: Array,
  title: String,
  maxLogos: String
})
</script>

<template>
  <h5 class="text-sm sm:text-xl font-semibold mt-2">{{ title }}</h5>
  <div class="grid" :class="maxLogos">
    <div class="justify-self-center text-center"
      v-for="tag in tagArray"  
    >
      <div class="size-12">
        <TechTag 
          :tag="tag"
          class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
        />
      </div>
      <h6 class="text-xs sm:text-sm text-body/75 font-content">{{ tag.title }}</h6>
    </div>
  </div>
</template>