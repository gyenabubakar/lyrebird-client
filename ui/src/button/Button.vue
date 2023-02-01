<script lang="ts" setup>
  import { ButtonColour, ButtonType } from './types';

  interface ButtonProps {
    colour?: ButtonColour;
    type?: ButtonType;
  }

  defineEmits(['click', 'mouseenter', 'mouseleave']);

  const props = withDefaults(defineProps<ButtonProps>(), {
    colour: 'default',
    type: 'button',
  });
</script>

<template>
  <button
    :class="props.colour"
    :type="props.type"
    @click="$emit('click', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
  button {
    @apply cursor-pointer rounded-lg border-0 py-2 px-4 text-sm font-semibold text-white outline-0;

    &.default {
      @apply bg-gray-200 text-gray-700 hover:bg-gray-300;
    }

    &.primary {
      @apply bg-primary-dark hover:bg-primary;
    }

    &.secondary {
      @apply bg-lbgreen hover:bg-teal-600;
    }

    &.black {
      @apply bg-black hover:bg-gray-900;
    }

    &.text {
      @apply bg-transparent text-gray-500 hover:text-gray-600;
    }

    &:disabled {
      @apply cursor-not-allowed bg-gray-300;
    }
  }
</style>
