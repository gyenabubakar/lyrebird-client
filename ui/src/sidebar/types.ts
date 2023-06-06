import type { Component, Ref, UnwrapRef } from 'vue';

export type NavigationItemLabel =
  | 'Dashboard'
  | 'Analytics'
  | 'Calendar'
  | 'Tweets'
  | 'My Mentions'
  | 'Accounts'
  | 'Settings';

export type NavigationItem = {
  label: NavigationItemLabel;
  icon: Component;
  props?: Record<string, unknown>;
};

export interface SidebarContext {
  activeItem: Ref<UnwrapRef<NavigationItemLabel>>;
  setActiveItem: (name: NavigationItemLabel) => void;
}
