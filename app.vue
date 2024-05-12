<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#777" />
    <NuxtPage class="prose" />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
