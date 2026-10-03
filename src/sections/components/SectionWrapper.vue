<script setup>
import { TextFormatService } from '../../services/TextFormatService.js';
const props = defineProps({
  title: String,
  subtitle: String,
  stripeColor: String,
});

const formattedSubtitle = props.subtitle ? TextFormatService.insertRichText(props.subtitle) : '';

</script>
<template>
  <section 
    :style="{ '--stripe-color': `var(${stripeColor})`}"
    class="smooth min-h-96 
    border-x-8 sm:border-x-16 md:border-x-24 lg:border-x-32 border-(--stripe-color)/20
    pb-16
    ">
    
    <!----------------------- BEGIN SECTION ----------------------->
    <div class="smooth w-sm sm:w-xl md:w-3xl lg:w-5xl min-w-sm mx-auto py-4">
      <h2 class="text-header text-4xl sm:text-6xl font-black">
        {{ props.title }}
      </h2>
      <p
        v-html="formattedSubtitle" 
        class="py-8 md:text-2xl"
      >
      </p>
      <div class="w-full px-4 md:px-16">
        <slot />
      </div>
    </div>
  </section>
</template>
