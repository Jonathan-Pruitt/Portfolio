<script setup>
import { computed } from 'vue';

const props = defineProps({
    tag: {
        type: Object,
        required: true
    },
    showTitle: Boolean,
    showDomain: Boolean,
    showFrequency: Boolean,
})
const techSvgs = import.meta.glob('/icons/tech/*.svg', {
  query : '?component',
  eager: true
});

const color = computed(() => {
    return TAG_COLORS[props.tag.domain] || 'bg-gray-600/20 inset-ring-gray-600'
})

const TAG_COLORS = {
    "backend" :             'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :            'bg-[hsl(180,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :           'bg-[hsl(210,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "version control" :     'bg-[hsl(270,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "project management":   'bg-[hsl(300,50%,50%)]/20 inset-ring-[hsl(300,50%,50%)] text-[hsl(300,50%,50%)]',
    'OS':                   'bg-[hsl(90,50%,50%)]/20 inset-ring-[hsl(90,50%,50%)] text-[hsl(90,50%,50%)]'
}

</script>

<template>
    <div 
        :title="tag.title + (tag.iconPath.includes('null.svg') ? ': NO SVG AVAILABLE' : '')"
        class="w-full h-full"
    >
        <component
            :is="techSvgs[tag.iconPath]"
            class="w-full h-full rounded sm:rounded-lg"
        />
        <h5 
            v-if="showDomain"
            class="text-sm font-semibold px-2 py-1 rounded-lg inset-ring-2 text-center hidden md:block mx-auto"
            :class="color"
        >
            {{ tag.domain }}
        </h5>
    </div>
</template>