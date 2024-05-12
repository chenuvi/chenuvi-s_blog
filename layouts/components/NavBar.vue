<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { navLinks } from '@/site.config'

const isDark = useDark({
  storageKey: 'blog-theme-mode',
})

const toggleTheme = useToggle(isDark)
</script>

<template>
  <nav class="flex items-center gap-2em">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.path"
      :title="link.title"
      :to="link.path"
      class="hover"
    >
      {{ link.title }}
    </NuxtLink>
    <a class="i-i hover" href="https://github.com/chenuvi" target="_blank" />
    <a class="hover" @click="toggleTheme()">
      <div class="dark:i-icon-park-outline-moon i-icon-park-outline-sun" />
    </a>
  </nav>
</template>

<style lang="postcss" scoped></style>
