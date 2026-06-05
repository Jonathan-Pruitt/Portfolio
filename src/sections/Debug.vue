<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
const updateWidth = () => { width.value = window.innerWidth }

onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))
</script>

<template>
    <span class="fixed top-5 left-5 z-[9999] bg-black text-white text-lg p-2">
        <span class="">{{ width }}px | </span>
        <span class="sm:hidden">xs</span>
        <span class="hidden sm:inline md:hidden">sm</span>
        <span class="hidden md:inline lg:hidden">md</span>
        <span class="hidden lg:inline xl:hidden">lg</span>
        <span class="hidden xl:inline 2xl:hidden">xl</span>
        <span class="hidden 2xl:inline">2xl</span>
    </span>
</template>