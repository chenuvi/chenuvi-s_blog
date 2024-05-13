<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '@/assets/styles/theme.css'
import '@/assets/styles/markdown.scss'
import '@/assets/styles/global.css'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#fcc932" :throttle="0" />
    <NuxtPage class="prose" />
  </NuxtLayout>
</template>
