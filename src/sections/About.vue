<script setup>
  /** */
</script>

<template>
  <section id="about">
    <div class="bg-[#6c85a4] border-y-16 border-brand">
      <div 
        class="
          w-full
          h-[300px]
          bg-[url(@/assets/images/big-sky.png)] 
          bg-center
          bg-no-repeat
          ">
      </div>
    </div>
    <h2 class="text-5xl font-black md:hidden">WHO I AM</h2>
    <div class="md:flex">
      <div class="shrink absolute invisible md:visible md:static">
        <h2 class="text-5xl font-black vertical-text tracking-[-0.25em]">WHO</h2>
        <h2 class="text-5xl font-black vertical-text tracking-[-0.25em]">I</h2>
        <h2 class="text-5xl font-black vertical-text tracking-[-0.25em]">AM</h2>
      </div>
      <div class="text-red-600 relative">
        <span class="absolute -top-4">THIS IS THE TEXT DIV THAT CONTAINS THE FRAMING IMAGE DON'T FORGET TO DELETE</span>
        <img src="../assets/images/cmd-temp.png" alt="">
        <div class="absolute opacity-100 left-1/2 -translate-x-1/2 border border-gray-200 --rescue set-top-8 set-w-static-val set-bg-black w-4xl top-6 h-100 bg-yellow-300 ">
          <div class="flex bg-white w-full text-black h-8 border-b border-gray-200">
            <img src="../assets/images/cmd-icon.png" class="size-5 place-self-center ml-1">
            <h6 class="font-cmd text-sm px-1 content-center">Administrator: Command Prompt</h6>
            <div class="flex grow justify-end">
              <img src="../assets/images/cmd-line.png"   class="h-full box-content px-2.5 hover:bg-gray-200"  alt="">
              <img src="../assets/images/cmd-square.png" class="h-full box-content px-2.5 hover:bg-gray-200"  alt="">
              <img src="../assets/images/cmd-x.png"      class="h-full box-content px-2.5 hover:bg-red-500" alt="">
            </div>
          </div>
          <div class="bg-black pt-4 text-white">
            <code class="block">C:\> cd About/Me</code>
            <code class="block mt-4">C:\About\Me> run Jonathan.exe</code>
            <code class="block text-yellow-500">------====== Unpacking identity_core ======------</code>
            <code class="leading-5">Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen Testing to see if I go offscreen </code>
          </div>
        </div>

        <p>Fullstack Developer focused on building fast, scalable, and resource-lean software and web applications. I have developed a love of the VILT (Vue, Inertia.js, Laravel, TailwindCSS) tech stack for web projects, and I'm partial to C# and Python for software applications. Working with Hardly Inc, I have leveraged asynchronous programming, ORM usage, and component-lead architecture to deliver high-impact solutions. Notably, I constructed an AI generated feedback engine for Hardly's 'Interview Practice' tool. By implementing Asynchronous Web Flows and Audio/Video Transcription, I significantly reduced latency between user submission and coach review. I am currently looking for a developer team to which I can contribute my passion for clean code and collaborative problem-solving.</p>
        <p>Core Competencies: Vue.js | Laravel | TailwindCSS] | React.js | JavaScript | PHP | Python | C# | MySQL | AI Integration</p>
      </div>
    </div>
  </section>
</template>