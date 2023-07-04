import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ImgFlowlyComponent } from './brand/img-flowly/img-flowly.component';
import { BadgeStatusComponent } from './components/badge-status/badge-status.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { CreateContratoComponent } from './components/create-contrato/create-contrato.component';
import { CreatePropostaComponent } from './components/create-proposta/create-proposta.component';
import { DocumentStatusComponent } from './components/document-status/document-status.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { ProjectStatusComponent } from './components/project-status/project-status.component';
import { SelectComponent } from './components/select/select.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableCelComponent } from './components/table-cel/table-cel.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { IconAttachComponent } from './icons/icon-attach/icon-attach.component';
import { IconCardComponent } from './icons/icon-card/icon-card.component';
import { IconChevronComponent } from './icons/icon-chevron/icon-chevron.component';
import { IconMenuComponent } from './icons/icon-menu/icon-menu.component';
import { IconPencilLineComponent } from './icons/icon-pencil-line/icon-pencil-line.component';
import { IconPlusComponent } from './icons/icon-plus/icon-plus.component';
import { IconSearchComponent } from './icons/icon-search/icon-search.component';
import { IconSettingsComponent } from './icons/icon-settings/icon-settings.component';
import { IconSidebarComponent } from './icons/icon-sidebar/icon-sidebar.component';
import { IconTrashComponent } from './icons/icon-trash/icon-trash.component';
import { IconWarningCircleComponent } from './icons/icon-warning-circle/icon-warning-circle.component';
import { ModalModule } from './modal/modal.module';

const images = [ImgFlowlyComponent];
const icons = [
  IconMenuComponent,
  IconPlusComponent,
  IconWarningCircleComponent,
  IconSidebarComponent,
  IconCardComponent,
  IconAttachComponent,
  IconChevronComponent,
  IconSearchComponent,
  IconSettingsComponent,
  IconTrashComponent,
  IconPencilLineComponent,
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
  TableCelComponent,
  TableListComponent,
  PageHeaderComponent,
  PageLayoutComponent,
  SelectComponent,
  LoadingComponent,
  CreateClienteComponent,
  ModalComponent,
  CreatePropostaComponent,
  CreateContratoComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule],
  declarations: [...images, ...icons, ...components],
  exports: [...images, ...icons, ...components],
})
export class SharedModule {}
