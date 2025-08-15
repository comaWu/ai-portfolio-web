
<template>
  <main class="relative isolate min-h-[calc(100vh-4rem)] text-white overflow-hidden flex flex-col">
    <!-- 背景：照片 + 漸層 + 海浪 -->
        <div aria-hidden class="absolute inset-0 z-0">
      <!-- 底圖：加一點亮度/對比/飽和，桌面加 bg-fixed 有視差感 -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed
              brightness-110 contrast-[1.03] saturate-115
              bg-[url('/hero-beach.jpg')]"
      ></div>

      <!-- 柔和暗角：大幅變淡（讓前景仍清楚，但不壓太黑） -->
      <div class="absolute inset-0 pointer-events-none
                  bg-gradient-to-b from-black/10 via-transparent to-black/25"></div>

      <!--（可選）若還覺得底部太暗，直接刪掉下一行；要保留就用更淡的值 -->
      <!-- <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/30"></div> -->

      <!-- 沙灘帶：降低不透明度並減小高度，避免大片色塊 -->
      <div class="sand absolute inset-x-0 bottom-0 h-[8vh] opacity-40"></div>

      
    </div>

    <!-- LOGO 文字：A / J O Y 四向進場（落點用 translate-x/y 控制） -->
    <section class="relative z-10 pt-24 md:pt-32 flex items-center justify-center">
      <div class="relative w-[260px] md:w-[320px] h-[200px] flex items-center justify-center drop-shadow-[0_2px_10px_rgba(0,0,0,.35)]">
                     <span class="absolute text-white text-[108px] md:text-[128px] leading-none font-serif
                     animate-in-from-top [animation-delay:200ms] translate-x-[-170px] md:translate-y-[44px]">H</span>
                     <span class="absolute text-white text-[108px] md:text-[128px] leading-none font-serif
                     animate-in-from-top [animation-delay:400ms] translate-x-[-85px] md:translate-y-[44px]">E</span>
                     <span class="absolute text-white text-[108px] md:text-[128px] leading-none font-serif
                     animate-in-from-top [animation-delay:600ms] translate-x-[0px] md:translate-y-[44px]">L</span>
                     <span class="absolute text-white text-[108px] md:text-[128px] leading-none font-serif
                     animate-in-from-top [animation-delay:800ms] translate-x-[85px] md:translate-y-[44px]">L</span>
                     <span class="absolute text-white text-[108px] md:text-[128px] leading-none font-serif
                     animate-in-from-top [animation-delay:1000ms] translate-x-[170px] md:translate-y-[44px]">O</span>

      </div>
    </section>

    <!-- 文案與按鈕 -->
    <section class="relative z-10 mt-14 md:mt-16">
      <div class="mx-auto max-w-xl px-4 text-center flex flex-col items-center space-y-5 md:space-y-6">
        <p class="text-2xl md:text-3xl font-medium tracking-[0.35em] leading-[1.9]
                  opacity-0 animate-fade-in [animation-delay:1200ms] drop-shadow-[0_1px_6px_rgba(0,0,0,.55)]">
          Portfolio
        </p>


        <RouterLink
          to="/home"
          class="opacity-0 animate-fade-in-up [animation-delay:2000ms]
                 inline-flex items-center gap-2 rounded-full border border-white/60 px-8 py-3
                 mt-2 md:mt-3 hover:-translate-y-0.5 transition-transform duration-300
                 bg-white/5 hover:bg-white/10 backdrop-blur-[2px]
                 focus:outline-none focus:ring-2 focus:ring-white/70"
        >
          Enter
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </div>
    </section>
  </main>
</template>