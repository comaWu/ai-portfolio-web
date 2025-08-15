<template>
  <section class="mx-auto max-w-6xl px-4 py-12 md:py-16">
    <h1 class="text-3xl md:text-4xl font-bold">首頁</h1>
    <p class="mt-3 text-white/70">這裡放你的導覽、最新消息或作品精選。</p>

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="i in 6" :key="i"
        class="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
        <div class="h-32 rounded-xl bg-white/10 mb-4"></div>
        <h3 class="font-semibold">作品標題 {{ i }}</h3>
        <p class="mt-1 text-sm text-white/70">簡短描述，支援多行。點擊可查看詳情。</p>
        <RouterLink to="/" class="mt-3 inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white">
          查看
          <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>