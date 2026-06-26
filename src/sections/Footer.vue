<script setup>
import SvgIcon from './partials/SvgIcon.vue';
import adhd_svg from '@/assets/component_svgs/adhd.svg?component'
import coffee_svg from '@/assets/component_svgs/coffee.svg?component'
const props = defineProps({
  sectionId: String
})
</script>

<template>
  <footer>
    <section :id="sectionId">
      <div class="text-header bg-brand border-t-2 py-8 sm:py-16">
        
        <div class="container mx-auto flex flex-col items-center justify-center text-center">
          <div class="my-8">
            <div class="mx-auto">
              <img src="/icons/logo.png" alt="Jonathan Pruitt Dev Logo" class="w-24 md:w-32 content-center mx-auto">
              <h2 class="text-3xl font-black mt-2">Jonathan Pruitt</h2>
              <p class="mx-auto font-content text-gray-400 max-w-sm text-lg md:text-2xl tracking-wide font-light">Full Stack Developer focusing on workflow improvement tools and utility automation</p>
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
            class="text-gray-400 tracking-wider mb-8 font-light md:text-xl"
          >jonathan.s.pruitt@gmail.com</address>

          <div class="border-t pt-6 w-full max-w-2xl text-center mb-16 tracking-widest text-gray-400 border-header font-light">
            <small class="flex md:text-xl place-content-center items-center">Built with ADHD <adhd_svg class="mr-2"/> and coffee <coffee_svg/></small>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
