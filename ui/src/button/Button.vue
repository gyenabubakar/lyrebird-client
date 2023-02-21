<script lang="ts" setup>
  import { ButtonColour, ButtonType } from './types';

  interface ButtonProps {
    type?: ButtonType;

    colour?: ButtonColour;
    fluid?: boolean;
    compact?: boolean;
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  }

  const emit = defineEmits(['click', 'mouseenter', 'mouseleave']);

  const props = withDefaults(defineProps<ButtonProps>(), {
    colour: 'default',
    type: 'button',
    size: 'medium',
    fluid: false,
    compact: false,
  });
</script>

<template>
  <button
    class="lb-button"
    :class="{
      [props.colour]: true,
      [props.size]: true,
      fluid: props.fluid,
      compact: props.compact,
    }"
    :type="props.type"
    @click="emit('click', $event)"
    @mouseenter="emit('mouseenter', $event)"
    @mouseleave="emit('mouseleave', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
  button {
    --size: 2rem;
    --size-multiplier: 1;
    --compact-size-multiplier: 1;
    --evaluated-size: calc(var(--size) * var(--size-multiplier) * var(--compact-size-multiplier));

    height: var(--evaluated-size);
    min-height: var(--evaluated-size);
    max-height: var(--evaluated-size);
    font-size: calc(10pt * var(--size-multiplier));
    line-height: calc(1.25rem * var(--size-multiplier));
    padding: 0 var(--evaluated-size);

    @apply cursor-pointer rounded-lg border-0 font-medium text-white outline-0;

    &.fluid {
      @apply flex w-full items-center justify-center px-[unset];
    }

    &.compact {
      --compact-size-multiplier: 0.9;
    }

    &.extra-small {
      --size-multiplier: 0.75;
    }

    &.small {
      --size-multiplier: 0.875;
    }

    &.medium {
      --size-multiplier: 1;
    }

    &.large {
      --size-multiplier: 1.25;
    }

    &.extra-large {
      --size-multiplier: 1.5;
    }

    &.default {
      @apply bg-gray-200 text-gray-700 hover:bg-gray-300;
    }

    &.primary {
      @apply bg-primary-dark hover:bg-primary-dark/90;
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
