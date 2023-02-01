import { Meta } from '@storybook/vue3';
import { LyrebirdApp } from '@lyrebird/ui';
import Button from './Button.vue';
import { ButtonProps } from './types';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    colour: {
      options: ['default', 'primary', 'secondary', 'black', 'text'],
    },
    type: { options: ['button', 'submit', 'reset'] },
    onClick: { action: 'on:click' },
    onMouseenter: { action: 'on:mouseenter' },
    onMouseleave: { action: 'on:mouseleave' },
  },
} as Meta<typeof Button>;

export const Default = (args: ButtonProps) => ({
  components: { Button, LyrebirdApp },
  setup() {
    return { args };
  },
  template: `
    <LyrebirdApp>
      <Button v-bind="args">
        Hello
      </Button>
    </LyrebirdApp>
  `,
});

Default.args = {
  colour: 'default',
  type: 'button',
};
