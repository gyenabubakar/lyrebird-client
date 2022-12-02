<script lang="ts" setup>
  import { definePageMeta } from '#imports';

  definePageMeta({
    layout: 'dashboard',
  });
</script>

<template>
  <div>
    Page: app

    <p>
      <NuxtLink to="/" class="text-teal-500">Back to home</NuxtLink>
    </p>
  </div>
</template>
