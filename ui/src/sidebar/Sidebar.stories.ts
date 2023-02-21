import { Meta } from '@storybook/vue3';
import { type Component } from 'vue';
import {
  PhSquaresFour,
  PhProjectorScreenChart,
  PhCalendar,
  PhTwitterLogo,
  PhAt,
  PhUsers,
  PhGearSix,
} from 'phosphor-vue';
import { LyrebirdApp } from '@lyrebird/ui';
import { NavigationItemLabel } from '@lyrebird/ui/sidebar/types';
import SidebarComponent, { SidebarNavItem } from '.';

interface Props {
  activeItem: NavigationItemLabel;
}

export default {
  title: 'Navigation/Sidebar',
  component: SidebarComponent,
  onLogoClick: { action: 'on:logo-click' },
  onCreateTweet: { action: 'on:create-tweet' },
  argTypes: {
    activeItem: {
      options: [
        'Dashboard',
        'Analytics',
        'Calendar',
        'Tweets',
        'My Mentions',
        'Accounts',
        'Settings',
      ],
    },
  },
} as Meta<typeof SidebarComponent>;

export const Sidebar = (args: Props) => ({
  components: { LyrebirdApp, SidebarComponent, SidebarNavItem, PhSquaresFour },
  setup() {
    const items: { label: NavigationItemLabel; icon: Component }[] = [
      { label: 'Dashboard', icon: PhSquaresFour },
      { label: 'Analytics', icon: PhProjectorScreenChart },
      { label: 'Calendar', icon: PhCalendar },
      { label: 'Tweets', icon: PhTwitterLogo },
      { label: 'My Mentions', icon: PhAt },
      { label: 'Accounts', icon: PhUsers },
      { label: 'Settings', icon: PhGearSix },
    ];

    return { args, items };
  },
  template: `
    <LyrebirdApp>
    <SidebarComponent v-bind="args">
      <template #logo>
        <img src="/lyrebird-logo.svg" alt="Lyrebird logo"/>
      </template>

      <template #navigation>
        <SidebarNavItem v-for="item in items" :key="item.label" :id="item.label" v-slot="{ isActive }">
          <a href="#">
            <component :is="item.icon" size="20" :weight="isActive ? 'fill' : 'regular'" class="mr-2"/>
            {{ item.label }}
          </a>
        </SidebarNavItem>
      </template>
    </SidebarComponent>

    <component is="style" type="text/css">
      html, body {
        margin: 0;
        padding: 0 !important;
      }
      #root {
        height: 100%;
      }
      body {
        background-color: #f5f5f5;
        height: 100vh;
      }
    </component>
    </LyrebirdApp>
  `,
});

Sidebar.args = {
  activeItem: 'Dashboard',
};
