<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  snippet: String,
  imageObject: Object,
  isActive: Boolean,
})
const isHover = ref(false);
</script>
<template>
  <div 
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    class="w-full h-full rounded-lg ring smooth"
    :class="isActive ? 'bg-brand ring-warning' : 'bg-peak dark:bg-raised/50 ring-subtle'"
  >
    <div 
      class="px-4 py-4"
    >
      <div class="relative">
        <img 
          :src="imageObject.path" :alt="imageObject.altText"
          :class="isHover ? 'opacity-50' : 'opacity-100'"
        >
        <div class="absolute inset-0 overflow-clip">
          <div 
            class="w-full h-full smooth rounded-xs" 
            :class="isHover ? 'bg-white/60 dark:bg-black/60 translate-y-0 text-header' : 'bg-transparent translate-y-11/10 text-transparent'"
            >
            <p class="text-sm sm:text-base lg:text-lg p-2 lg:p-4">
              {{ props.snippet }}
            </p>
          </div>
        </div>
      </div>
      <h3 class="text-lg" :class="isActive ? 'font-bold' : ''">{{ props.title }}</h3>
    </div>
  </div>
</template>