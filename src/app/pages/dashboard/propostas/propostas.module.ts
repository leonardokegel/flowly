import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PropostasRoutingModule } from './propostas-routing.module';
import { PropostasComponent } from './propostas.component';

@NgModule({
  declarations: [PropostasComponent],
  imports: [
    CommonModule,
    FormsModule,
    PropostasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PropostasModule {}
