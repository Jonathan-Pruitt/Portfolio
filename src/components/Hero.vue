<script setup>

</script>

<template>
  <section id="home">
    <div class="container mx-auto max-w-3xl mt-5 min-h-screen">
      <div class="border aspect-square grid grid-cols-2 items-center">
        <!-- Left side -->
        <div class="aspect-square text-right border-green-500 border px-4">
          <h1 class="text-5xl font-black tracking-tight mb-2">JONATHAN PRUITT</h1>
          <h2 class="text-xl text-secondary-text font-content font-light italic tracking-widest mb-8">Full Stack Developer</h2>
          <div class="flex gap-4 place-content-start fill-jp-secondary">
            <svg class="w-12 h-12" viewBox="0 0 24 24">
              <!-- RESCUE (Place an SVG logo here) -->
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            </svg>
            <svg class="w-12 h-12" viewBox="0 0 24 24">
              <!-- RESCUE (Place an SVG logo here) -->
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            </svg>
          </div>
        </div>
        
        <!-- Right side -->
        <div class="border-blue-500 border aspect-square px-4">
          <img src="https://placehold.co/400x600" alt="Portfolio" class="aspect-2/3 object-cover w-full rounded-md shadow-md" />
        </div>
      </div>
      <div class="mt-8 grid grid-cols-3 gap-4">
        <div class="aspect-square w-3xs rounded-md shadow-md bg-jp-primary">This</div>
        <div class="aspect-square w-3xs rounded-md shadow-md bg-jp-secondary">That</div>
        <div class="aspect-square w-3xs rounded-md shadow-md bg-jp-splash">The other</div>
        <div class="aspect-square w-3xs rounded-md shadow-md bg-surface">Surface</div>
      </div>
    </div>
  </section>
</template>