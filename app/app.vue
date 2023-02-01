<script lang="ts" setup>
  import { useHead } from '#imports';
  import Button from '@lyrebird/ui/button';
  import { LyrebirdApp } from '@lyrebird/ui';

  useHead({
    title: 'Lyrebird',
    link: [
      {
        rel: 'shortcut icon',
        href: '/lyrebird-logo.svg',
        type: 'image/svg+xml',
      },
    ],
  });
</script>

<template>
  <LyrebirdApp>
    <Button> Hello World </Button>
    <p>Hello Nuxt</p>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </LyrebirdApp>
</template>

<style>
  p {
    @apply text-primary;

    &:hover {
      @apply text-primary-dark;
    }
  }
</style>
