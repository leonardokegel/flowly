import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ImgFlowlyComponent } from './brand/img-flowly/img-flowly.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconMenuComponent } from './icons/icon-menu/icon-menu.component';
import { IconPlusComponent } from './icons/icon-plus/icon-plus.component';
import { IconWarningCircleComponent } from './icons/icon-warning-circle/icon-warning-circle.component';
import { CardComponent } from './components/card/card.component';

const images = [ImgFlowlyComponent];
const icons = [
  IconMenuComponent,
  IconPlusComponent,
  IconWarningCircleComponent,
];
const components = [
  NavbarComponent,
  SidebarComponent,
  ButtonComponent,
  InputComponent,
  CardComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...images, ...icons, ...components],
  exports: [...images, ...icons, ...components],
})
export class SharedModule {}
