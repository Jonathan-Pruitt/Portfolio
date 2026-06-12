<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  sectionId: String
})

const width = ref(0);
const aboutMeData = ref({
  title: 'Administrator: Command Prompt',
  header: '------====== Unpacking identity_core ======------',
})
const breakpoint = 500;

onMounted(() => {
  setAboutMeData();
})

const setAboutMeData = () => {
  width.value = window.innerWidth;
  if (width.value < breakpoint) {
    aboutMeData.value = {
      title: "Command Prompt",
      header: "---=== Unpacking identity_core ===---"
    }
  }
}
/**
 * WORK IN PROGRESS -- 
 *  TEXT IS TYPED 1 CHAR AT A TIME.
 *    V1 - TEXT IS TYPED AS IS (FLAT, NO RICHTEXT)
 *    V2 - INSERT <STRONG> TAGS FOR RICHTEXT
 *      IDEA -- setTimeout(()=> {v-model.value += char}) -- USE NESTED LOOP FOR 'STRONG'
 * 
 */
// import { ref } from 'vue';
// const test = "This is the $*text$ that I want to $*parse$ then display in $*erratic$ timing."
// const crawlingText = ref('')

// const slowText = (text) => {
//   crawlingText.value = '';
//   text.forEach((char) => {
//     setTimeout()
//   });
// }

</script>

<template>
  <section :id="sectionId" class="bg-linear-to-tr from-blue-200 to-blue-700 pb-1">
    <h2 class="text-5xl font-black sm:hidden cursor-default bg-base">WHO I AM</h2>
    <div class="bg-[#6c85a4] border-y-4 border-brand">
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
    
    <div class="sm:flex relative w-full">  
      
      <div class="absolute sm:static flex flex-col h-full invisible sm:visible mx-8 cursor-default">
        <h2 class="text-5xl font-black vertical-text tracking-[-0.30em] mt-16">WHO</h2>
        <h2 class="text-5xl font-black vertical-text tracking-[-0.30em] mt-8">I</h2>
        <h2 class="text-5xl font-black vertical-text tracking-[-0.30em] mt-8">AM</h2>
      </div>
      
      <!-- COMMAND PROMPT MIMIC -->
      <div class="mx-8 shadow-lg shadow-black/50">
        <div class="bg-black border-gray-200 border w-full pb-8 mx-auto my-16 max-w-4xl">
          <div class="flex bg-white w-full text-black h-8 border-b border-gray-200">
            <img src="../assets/images/cmd-icon.png" class="size-5 place-self-center ml-1 shrink">
            <h6 class="font-cmd text-sm text-black px-1 content-center whitespace-nowrap">{{ aboutMeData.title }}</h6>
            <div class="flex grow justify-end">
              <img src="../assets/images/cmd-line.png"   class="h-full box-content px-2.5 hover:bg-gray-200"  alt="">
              <img src="../assets/images/cmd-square.png" class="h-full box-content px-2.5 hover:bg-gray-200"  alt="">
              <img src="../assets/images/cmd-x.png"      class="h-full box-content px-2.5 hover:bg-red-500" alt="">
            </div>
          </div>
          <div class="pt-4 text-white">
            <code class="block">C:\> cd About/Me</code>
            <code class="block mt-4">C:\About\Me> run Jonathan.exe</code>
            <code class="block mt-4 text-yellow-300">{{ aboutMeData.header }}</code>
            <code class="leading-5">
              <p class="mt-4">I am a <strong>Full-Stack Software Developer</strong> with a passion for building functional, scalable backends. My journey into tech began at the <strong>Mississippi Coding Academies</strong>, where I built a strong foundation in <strong>C#</strong> and software architecture. Since then, I've channeled my lifelong love for troubleshooting and problem-solving into building deep-tech personal projects and delivering dynamic, scalable solutions for <strong>professional client work.</strong></p>

              <p class="mt-4">Through my professional work with Hardly, I've gained invaluable experience in <strong>component-led architecture, ORM, and asynchronous web flows</strong>. A personal highlight was developing and deploying an upgraded 'Interview Practice Tool,' where I implemented <strong>audio/video transcription</strong> to provide users with real-time feedback. Whether optimizing data manipulation or rendering complex logic, I treat every project as a challenge to master new frameworks and solve novel problems.</p>

              <p class="mt-4">I do my best work in collaborative environments where I can learn from mentors, pitch ideas, and iterate based on feedback. I am excited to bring my <strong>technical adaptability</strong>, strong work ethic, and passion for excellence to a forward-thinking development team.</p>

              <p class="mt-4"><strong>Core Competencies:</strong> Vue.js | JavaScript | Python | C# | Laravel | PHP | MySQL | React.js | TailwindCSS | AI Integration</p>
            </code>
          </div>
        </div>

        <!-- START OFFICIAL ABOUT ME TEXT -->
        <!-- <p>I am fullstack software developer with a preference for building functional, scalable backends. From early childhood, my interest in video games, science, and technology got me involved in hobbies where I learned trouble-shooting skills, how to read error messages, and attention to detail. In early 2023, I entered the world of software development by learning the basics of C# while apprenticing under Andrew Stamps at the Mississippi Coding Adademies. Since that time, I have been working on personal and professional projects including games, utility apps, SaaS websites, and entertainment apps.</p>

        <p>I created each of my personal projects to be a challenge I could use to deepen my understanding of a coding language, framework, or concept. While the Catan Companion project expanded my understanding of the interaction between a window's logic and the client's view, the Slasher game introduced me to game creation, programatically rendering and orienting objects in 2d, and core game logic, and the ASCII Dreaming project strengthened my appreciation for data manipulation by showing how binary data can be interpreted and represented in many forms. My professional work with Hardly has provided me with invaluable experience in ORM, component-lead architecture, client-lead project work, and scalable, dynamic solutions to novel problems. I am particularly proud of my development and deployment of the upgraded 'Interview Practice Tool' where I implemented asynchronous web flows and audio/video transcription to create real-time feedback to users regarding the efficacy of their interview responses.</p>

        <p>I've found that I do my best work when I have easy access to a supportive team and mentor. I love hearing the ideas of others, presenting my own ideas and findings, incorporating feedback into my work, and building awesome projects through individual and collaborative efforts. I am excited to bring my passion and experience with me to a team with a similar zeal for excellence.</p> -->
        <!-- END OFFICIAL ABOUT ME TEXT -->

      </div>
    </div>
  </section>
</template>

<style>
p > strong {
  /* color: var(--color-brand); */
  color: black;
  font-size: 1.15rem;
  padding-left: var(--spacing);
  padding-left: var(--spacing);
  background-color: var(--color-brand);
}
</style>