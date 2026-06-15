<script setup>
import { computed } from 'vue';

const props = defineProps({
    tag: {
        type: Object,
        required: true
    },
    size: {
        type: String,
        default: 'md'
    }
})

const techSvgs = import.meta.glob('/src/assets/icons/tech/*.svg', {
  query : '?component',
  eager: true
});

const color = computed(() => {
    return TAG_COLORS[props.tag.domain] || 'bg-gray-600/20 inset-ring-gray-600'
})

const size = computed(() => {
    return SIZES[props.size] || SIZES.md
})

const TAG_COLORS = {
    "backend" :             'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :            'bg-[hsl(180,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :           'bg-[hsl(210,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "version control" :     'bg-[hsl(270,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "project management":   'bg-[hsl(300,50%,50%)]/20 inset-ring-[hsl(320,50%,50%)] text-[hsl(320,50%,50%)]',
}

const SIZES = {
    "xs" : "size-8 md:size-12 lg:16",
    "sm" : "size-12 md:size-16 lg:size-24",
    "md" : "size-16 md:size-24 lg:size-32",
    "lg" : "size-24 md:size-32 lg:size-40",
}
</script>

<template>
    <div 
        :title="tag.title + (tag.iconPath.includes('null.svg') ? ': NO SVG AVAILABLE' : '')"
    >
        <component
            :is="techSvgs[tag.iconPath]"
            :class="size"
        />
    </div>
</template>