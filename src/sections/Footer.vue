
<script setup>
const props = defineProps({
  sectionId: String
})
</script>

<template>
  <footer>
    <section :id="sectionId">
      <div class="rescue">
        <address type="email">jonathan@cc.cc</address>
        <small>Built with ADHD and coffee</small>
      </div>
    </section>
  </footer>
</template>
