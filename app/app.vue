<script lang="ts" setup>
  import { useHead } from '#imports';

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
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
