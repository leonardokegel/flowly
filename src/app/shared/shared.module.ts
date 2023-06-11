import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IconMenuComponent } from './icons/icon-menu/icon-menu.component';
import { IconPlusComponent } from './icons/icon-plus/icon-plus.component';
import { IconWarningCircleComponent } from './icons/icon-warning-circle/icon-warning-circle.component';
import { IconSidebarComponent } from './icons/icon-sidebar/icon-sidebar.component';
import { IconCardComponent } from './icons/icon-card/icon-card.component';
import { IconAttachComponent } from './icons/icon-attach/icon-attach.component';

import { ImgFlowlyComponent } from './brand/img-flowly/img-flowly.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { ProjectStatusComponent } from './components/project-status/project-status.component';
import { DocumentStatusComponent } from './components/document-status/document-status.component';
import { BadgeStatusComponent } from './components/badge-status/badge-status.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalModule } from './modal/modal.module';


const images = [ImgFlowlyComponent];
const icons = [
  IconMenuComponent,
  IconPlusComponent,
  IconWarningCircleComponent,
  IconSidebarComponent,
  IconCardComponent,
  IconAttachComponent,
];
const components = [
  NavbarComponent,
  SidebarComponent,
  ButtonComponent,
  InputComponent,
  CardComponent,
  ProjectStatusComponent,
  DocumentStatusComponent,
  BadgeStatusComponent,
  SidebarLinkComponent,
  MessagesComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule],
  declarations: [...images, ...icons, ...components],
  exports: [...images, ...icons, ...components],
})
export class SharedModule {}
