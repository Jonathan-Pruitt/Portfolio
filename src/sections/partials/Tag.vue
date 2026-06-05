<script setup>
import { computed } from 'vue';

const props = defineProps({
    tag: {
        type: [String, Object],
        required: true
    }
})

const text = props.tag.textIndicator;

const color = computed(() => {
    return TAG_COLORS[props.tag.colorIndicator] || 'bg-gray-600/20 inset-ring-gray-600'
})

const TAG_COLORS = {
    "backend" :     'bg-[hsl(240,50%,50%)]/20 inset-ring-[hsl(240,50%,50%)] text-[hsl(240,50%,50%)]',
    "frontend" :    'bg-[hsl(210,50%,50%)]/20 inset-ring-[hsl(210,50%,50%)] text-[hsl(210,50%,50%)]',
    "framework" :   'bg-[hsl(180,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "entertainment":'bg-[hsl(150,50%,50%)]/20 inset-ring-[hsl(150,50%,50%)] text-[hsl(150,50%,50%)]',
    "personal" :    'bg-[hsl(120,50%,50%)]/20 inset-ring-[hsl(120,50%,50%)] text-[hsl(120,50%,50%)]',
    "client-driven":'bg-[hsl(90,50%,50%)]/20 inset-ring-[hsl(90,50%,50%)] text-[hsl(90,50%,50%)]',
    "utility" :     'bg-[hsl(60,50%,50%)]/20 inset-ring-[hsl(60,50%,50%)] text-[hsl(60,50%,50%)]',
}

</script>

<template>
    <!-- class="mx-1 my-auto py-1 px-2 font-semibold text-tech text-xs rounded-lg bg-tech/30 ring-tech inset-ring-2 inline-block" -->
    <div 
        class="text-xs font-semibold mx-1 my-auto px-2 py-1 inline-block rounded-lg inset-ring-2"
        :class="color"
        :title="text"
    >
        {{ text }}
    </div>
</template>