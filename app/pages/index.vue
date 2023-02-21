<script lang="ts" setup>
  import Sidebar from '@lyrebird/ui/sidebar';
</script>

<template>
  <div>
    <Sidebar active-item="Dashboard" />

    Page: foo

    <p>
      <NuxtLink to="/app/" class="text-teal-500">First auth'ed page.</NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>
