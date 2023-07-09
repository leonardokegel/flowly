import { Component, Input } from '@angular/core';

export interface ProjectStatus {
  title: string
  count: string
}

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss']
})
export class ProjectStatusComponent {
  @Input()
  projectStatus: ProjectStatus[] = [
    { title: 'Proposta enviada', count: '3'},
    { title: 'Contrato assinado', count: '2'},
    { title: 'Em progresso', count: '1'},
    { title: 'Esperando', count: '1'},
    { title: 'Completo', count: '0'}
  ];
}
