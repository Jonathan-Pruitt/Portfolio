<script setup>
import { computed } from 'vue';
import { ICONS } from '../../assets/svgs/svgs.js';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: "md"
    },
})
const sm = 'w-12 h-12'
const SIZE_MAP = {
  sm: sm,    
  md: sm + ' sm:w-16 sm:h-16',  
  lg: sm + ' sm:w-24 sm:h-24',  
};

const svgData = computed(() => {
    return ICONS[props.name];
})

const sizeClass = computed(() => {
    return SIZE_MAP[props.size] || SIZE_MAP.md;
})

</script>

<template>
    <div 
        class="rounded-lg inline-block"
        :class="sizeClass"
        >
        <svg 
            v-if="svgData" 
            class="w-full h-full" 
            id="icon" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            width="100%" 
            height="100%" 
            v-html="svgData.content" 
            :viewBox="svgData.viewBox">
        </svg>
    </div>
</template>