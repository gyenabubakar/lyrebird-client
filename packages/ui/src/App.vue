<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="">Hello <span>world</span>!</h1>
  </div>
</template>

<style lang="postcss" scoped>
  h1 {
    @apply text-3xl font-bold text-red-500;

    span {
      @apply text-blue-500;
    }
  }
</style>
