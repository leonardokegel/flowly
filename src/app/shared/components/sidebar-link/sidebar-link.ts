import { IconSidebarType } from "@shared/icons/icon-sidebar/icon-sidebar.model";

export type CurrentLink = 'DEFAULT' | 'CURRENT';

export interface SidebarLink {
  label: string
  url: string
  icon?: IconSidebarType
};