<script setup>
import SvgIcon from './partials/SvgIcon.vue';
const props = defineProps({
  sectionId: String
})
</script>

<template>
  <footer>
    <section :id="sectionId">
      <div class="text-header bg-brand border-t-2">
        
        <div class="container mx-auto flex flex-col items-center justify-center text-center">
          <div class="my-8">
            <div class="mx-auto">
              <img src="../assets/icons/logo.png" alt="Jonathan Pruitt Dev Logo" class="w-24 content-center mx-auto">
              <h2 class="text-3xl font-black mt-2">Jonathan Pruitt</h2>
              <p class="mx-auto font-content text-brand-muted max-w-sm text-lg tracking-wide font-light">Full Stack Developer focusing on workflow improvement tools and utility automation</p>
            </div>
          </div>
          <div class="">
            <div class="flex gap-4">
              <a href="https://github.com/Jonathan-Pruitt" target="_blank" class="ml-2">
                <SvgIcon class="hover:brightness-50 transition-all duration-200" size="sm" color="black" name="github"/>
              </a>
              <a href="https://linkedin.com/in/jonathan-pruitt-developer" target="_blank" class="ml-2">
                <SvgIcon class="hover:brightness-50 transition-all duration-200" size="sm" color="black" name="linkedin"/>
              </a>
              <a href="https://www.youtube.com/@BTWJ-stream" target="_blank" class="ml-2">
                <SvgIcon class="hover:brightness-50 transition-all duration-200" size="sm" color="black" name="youtube"/>
              </a>
            </div>
          </div>
          <address 
            type="email"
            class="text-brand-muted tracking-wider mb-8 font-light"
          >jonathan.s.pruitt@gmail.com</address>

          <div class="border-t pt-6 w-full max-w-2xl text-center mb-16 tracking-widest text-brand-muted font-light">
            <small>Built with ADHD and coffee</small>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
