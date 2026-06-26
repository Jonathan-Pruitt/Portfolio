<script setup>
import { computed } from 'vue';


const props = defineProps({
    tag: {
        type: [String, Object],
        required: true
    },
})

const svgTags = import.meta.glob('tags/*.svg', {
  query : '?component',
  eager: true
});
const text = props.tag.textIndicator;

const color = computed(() => {
    return TAG_COLORS[props.tag.colorIndicator] || 'bg-gray-600/20 inset-ring-gray-600'
})

const iconColor = computed(() => {
    return ICON_COLORS[props.tag.colorIndicator] || 'fill-current'
})

const TAG_COLORS = {
    "backend" :     'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :    'bg-[hsl(210,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :   'bg-[hsl(180,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "personal" :    'bg-[hsl(120,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "usage":        'bg-[hsl(320,50%,50%)]/20 inset-ring-[hsl(320,50%,50%)] text-[hsl(320,50%,50%)]',
    "professional": 'bg-[hsl(30,50%,40%)]/20 inset-ring-[hsl(30,50%,40%)] text-[hsl(30,50%,40%)]',
}

const ICON_COLORS = {
    "backend" :     'text-tag-backend',
    "frontend" :    'text-tag-frontend',
    "framework" :   'text-tag-framework',
    "personal" :    'text-tag-personal',
    "usage":        'text-tag-usage',
    "professional": 'text-tag-professional',
}

</script>

<template>
    <div 
        :class="iconColor"
        :title="text || 'icon'"
        class="w-full h-full"
    >
        <component 
          :is="svgTags[tag.iconPath ?? '']" 
          :class="tag.iconPath ? '' : 'hidden'"
          class="w-full h-full"
          />
          <!-- class="size-6 sm:size-8 md:size-10 lg:size-12 rounded-lg bg-base/25 mx-auto" -->
        <!-- <h5 
          class="text-xs font-semibold my-auto px-2 py-1 rounded-lg inset-ring-2 text-center mx-auto"
          :class="color"
        >
          {{ text }}
        </h5> -->
    </div>
</template>