<script lang="ts" setup>
  import { onMounted, useHead } from '#imports';
  import { helloAssets } from '@lyrebird/app/assets/main';

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

  onMounted(() => {
    helloAssets();
  });
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
