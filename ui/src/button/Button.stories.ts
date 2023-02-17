import { Meta } from '@storybook/vue3';
import { LyrebirdApp } from '@lyrebird/ui';
import ButtonComponent from './Button.vue';
import { ButtonProps } from './types';

export default {
  title: 'Elements/Button',
  component: ButtonComponent,
  argTypes: {
    size: { options: ['extra-small', 'small', 'medium', 'large', 'extra-large'] },
    colour: {
      options: ['default', 'primary', 'secondary', 'black', 'text'],
    },
    type: { options: ['button', 'submit', 'reset'] },
    fluid: { control: 'boolean' },
    compact: { control: 'boolean' },
    onClick: { action: 'on:click' },
    onMouseenter: { action: 'on:mouseenter' },
    onMouseleave: { action: 'on:mouseleave' },
  },
} as Meta<typeof ButtonComponent>;

export const Button = (args: ButtonProps) => ({
  components: { Button: ButtonComponent, LyrebirdApp },
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

Button.args = {
  size: 'medium',
  colour: 'default',
  type: 'button',
  fluid: false,
  compact: false,
};
