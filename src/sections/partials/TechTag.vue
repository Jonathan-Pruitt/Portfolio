<script setup>
import { computed } from 'vue';

const props = defineProps({
    tag: {
        type: [String, Object],
        required: true
    },
})

const text = props.tag.textIndicator;

const color = computed(() => {
    return TAG_COLORS[props.tag.colorIndicator] || 'bg-gray-600/20 inset-ring-gray-600'
})

const TAG_COLORS = {
    "backend" :     'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :    'bg-[hsl(210,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :   'bg-[hsl(180,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "personal" :    'bg-[hsl(120,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "usage":        'bg-[hsl(320,50%,50%)]/20 inset-ring-[hsl(320,50%,50%)] text-[hsl(320,50%,50%)]',
    "professional": 'bg-[hsl(30,50%,40%)]/20 inset-ring-[hsl(30,50%,40%)] text-[hsl(30,50%,40%)]',
}

</script>

<template>
    <!-- class="mx-1 my-auto py-1 px-2 font-semibold text-tech text-xs rounded-lg bg-tech/30 ring-tech inset-ring-2 inline-block" -->
    <div 
        class="text-xs font-semibold mx-1 my-auto px-2 py-1 inline-block rounded-lg inset-ring-2 text-center"
        :class="color"
        :title="text"
    >
        {{ text }}
    </div>
</template>