import { Meta } from '@storybook/vue3';
import Button from './Button.vue';
import { ButtonStyle, ButtonType } from './types';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    style: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'text', 'success', 'danger', 'warning'],
      },
    },
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
  },
} as Meta;

export const Default = (args: { style: ButtonStyle; type: ButtonType }) => ({
  components: { Button },
  template: `
    <Button v-bind="args">Hello</Button>
  `,
  setup() {
    return { args };
  },
});
