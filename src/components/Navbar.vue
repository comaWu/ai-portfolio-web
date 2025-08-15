<template>
  <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
    <nav class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="inline-block w-8 h-8 clip-hex bg-[#caa48b]"></span>
        <span class="font-semibold tracking-wide">AJOY</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/home" class="hover:text-white/80">首頁</RouterLink>
        <a href="#" class="opacity-60 hover:opacity-100">關於</a>
        <a href="#" class="opacity-60 hover:opacity-100">作品</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>