<script setup>

</script>

<template>
  <section id="home">
    <div class="container mx-auto max-w-3xl mt-4 min-h-screen">
      <div class="aspect-square grid grid-cols-2 items-center">
        <!-- Left side -->
        <div class="aspect-square text-right px-4 relative border">
          <h1 class="text-5xl font-black tracking-tight mb-2">JONATHAN PRUITT</h1>
          <h2 class="text-xl text-jp-gray font-content font-light italic tracking-widest mb-8">Full Stack Developer</h2>
          <div class="relative">
            <div class="fill-jp-full absolute grid gap-4 inset-y-0 right-0">
              <svg class="w-12 h-12" viewBox="0 0 24 24">
                <!-- RESCUE (Place an SVG logo here) -->
                <rect x="0" y="0" width="24" height="24" rx="2" ry="2" />
              </svg>
              <svg class="w-12 h-12" viewBox="0 0 24 24">
                <!-- RESCUE (Place an SVG logo here) -->
                <rect x="0" y="0" width="24" height="24" rx="2" ry="2" />
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Right side -->
        <div class="aspect-square px-4">
          <img src="https://placehold.co/400x600" alt="Portfolio" class="aspect-2/3 object-cover w-full h-full rounded-md shadow-md" />
        </div>
      </div>
    </div>
  </section>
</template>