<template>
  <footer class="bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30
               border-t border-white/10 text-sm text-white/70">
    <div class="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
      <p>© {{ new Date().getFullYear() }} AJOY. All rights reserved.</p>
      <p class="hidden sm:block">Made with Vue + Tailwind</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>