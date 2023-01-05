<script lang="ts" setup>
  import { ButtonStyle, ButtonType } from './types';

  interface Props {
    style: ButtonStyle;
    type: ButtonType;
  }

  const props = withDefaults(defineProps<Props>(), {
    style: 'default',
    type: 'button',
  });
</script>

<template>
  <button :class="`${props.style}`" :type="props.type">
    <slot />
  </button>
</template>

<style scoped>
  button {
    @apply cursor-pointer rounded border-0 py-2 px-4 font-bold text-white outline-0;

    &.default {
      @apply bg-gray-500 hover:bg-gray-600;
    }

    &.primary {
      @apply bg-blue-500 hover:bg-blue-600;
    }

    &.secondary {
      @apply bg-teal-500 hover:bg-teal-600;
    }

    &.danger {
      @apply bg-red-500 hover:bg-red-600;
    }

    &.success {
      @apply bg-green-500 hover:bg-green-600;
    }

    &.warning {
      @apply bg-yellow-500 hover:bg-yellow-600;
    }

    &.text {
      @apply bg-transparent text-gray-500 hover:text-gray-600;
    }

    &:disabled {
      @apply cursor-not-allowed bg-gray-300;
    }
  }
</style>
