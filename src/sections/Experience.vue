<script setup>
const sectionId = '#'
</script>

<template>
  <section :id="sectionId">
    <!-- EXPERIENCE -->
    <div class="border-2">
      <h3>Tech Experinece</h3>
      <h4 class="">
        Core Competencies 
        <button 
          @click="handleClickCategories('core')"
          class="text-xs cursor-pointer text-info"
        >
          {{ showDetails != 'core' ? ' more' : ' less' }}
        </button>
        <em 
          class="italic text-xs text-body transition-opacity duration-75"
          :class="showDetails == 'core' ? 'visible opacity-100' : 'hidden opacity-0'"
        >
          Technologies I use independently to design, build, and deliver production-ready projects with minimal oversight (other than code reivew).
        </em>
      </h4>
      <div class="grid grid-cols-2">
        <div class=""
          v-for="tag in coreTags"
        >
          <div class="grid grid-cols-2 items-center">
            <div class="size-8 sm:size-12 md:size-16 justify-self-end box-content p-1">
              <TechTag 
                :tag="tag"
              />
            </div>
            <div class="dark:border-none border-subtle">
              <h5 class="font-semibold tracking-tight">{{ tag.title }}</h5>
              <p  class="text-sm text-content font-light">{{ tag.useFrequency }}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="">
        Proficient
        <button 
          @click="handleClickCategories('proficient')"
          class="text-xs cursor-pointer text-info"
        >
          {{showDetails != 'proficient' ? 'more' : 'less'}}
        </button>
        <em 
          class="italic text-xs text-body"
          :class="showDetails == 'proficient' ? 'visible opacity-100' : 'hidden opacity-0'"
        >
          Technologies applied successfully in personal or hobby projects where I can build functional applications independently.
        </em>
      </h4>
      <h4 class="">
        Familiar 
        <button 
          @click="handleClickCategories('familiar')"
          class="text-xs cursor-pointer text-info"
        >
          {{showDetails != 'familiar' ? 'more' : 'less'}}
        </button>
      </h4>
      <em 
        class="italic text-xs text-body tracking-tight"
        :class="showDetails == 'familiar' ? 'visible opacity-100' : 'hidden opacity-0'"
      >
        Technologies I have conceptual knowledge of and basic hands-on experience with through limited project exposure.
      </em>
    </div>
  </section>
</template>