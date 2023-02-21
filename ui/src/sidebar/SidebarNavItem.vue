<script lang="ts" setup>
  import { computed, inject } from 'vue';
  import type { NavigationItemLabel, SidebarContext } from './types';

  interface Props {
    id: NavigationItemLabel;
  }

  const props = defineProps<Props>();

  const { activeItem } = inject<SidebarContext>('lb-sidebar')!;

  const isActive = computed(() => activeItem.value === props.id);
</script>

<template>
  <li class="nav-item" :class="{ active: isActive }">
    <slot :is-active="isActive" />
  </li>
</template>

<style scoped>
  li.nav-item > :deep(*:first-child) {
    @apply flex cursor-pointer items-center rounded-[4px] px-3 py-[14px] text-gray-500;

    &:hover {
      @apply text-primary-dark;
    }
  }

  li.active > :deep(*:first-child) {
    @apply bg-[#F2E2FF] text-primary-dark;
  }
</style>
