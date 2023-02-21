<script setup>
  import './style.css';
</script>

<template>
  <div id="lyrebird-app-container">
    <slot />
  </div>
</template>

<style>
  #lyrebird-app-container {
    --transition-duration: 0.15s;
    --transition-timing-function: ease-in;

    @apply h-full w-full;
  }

  #lyrebird-app-container,
  #lyrebird-app-container * {
    transition: all var(--transition-duration) var(--transition-timing-function);
  }
</style>
