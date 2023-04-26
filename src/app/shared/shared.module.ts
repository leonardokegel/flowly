import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ImgFlowlyComponent } from './brand/img-flowly/img-flowly.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconMenuComponent } from './icons/icon-menu/icon-menu.component';
import { IconPlusComponent } from './icons/icon-plus/icon-plus.component';

const images = [ImgFlowlyComponent];
const icons = [IconMenuComponent, IconPlusComponent];
const components = [NavbarComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [...images, ...icons, ...components, SidebarComponent],
  exports: [...images, ...icons, ...components],
})
export class SharedModule {}
