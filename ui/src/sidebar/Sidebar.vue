<script lang="ts" setup>
  import { provide, ref } from 'vue';
  import { PhPencil } from 'phosphor-vue';
  import Button from '@lyrebird/ui/button';
  import { NavigationItemLabel } from './types';

  interface Props {
    activeItem: NavigationItemLabel;
  }

  const emit = defineEmits(['logo-click', 'create-tweet']);
  const props = defineProps<Props>();

  const activeItem = ref(props.activeItem);

  function setActiveItem(name: NavigationItemLabel) {
    activeItem.value = name;
  }

  provide('lb-sidebar', { activeItem, setActiveItem });
</script>

<template>
  <div class="lb-sidebar">
    <div class="logo" @click="$emit('logo-click')">
      <slot name="logo" />
    </div>

    <Button fluid colour="primary" size="large" class="text-white" @click="emit('create-tweet')">
      <PhPencil :size="18" weight="fill" color="white" />
      <span class="ml-1">Create new tweet</span>
    </Button>

    <ul class="nav-list">
      <slot name="navigation" />
    </ul>
  </div>
</template>

<style scoped lang="postcss">
  .lb-sidebar {
    @apply h-full w-[284px] bg-white px-4 pt-8;
  }

  .logo {
    @apply mx-auto h-[54px] w-[54px] cursor-pointer;
  }

  .lb-sidebar :deep(.lb-button) {
    @apply my-[27px];
  }
</style>
