import { Component, OnInit } from '@angular/core';
import { ProjectsRow } from '@shared/components/table-list/table-list.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projects!: ProjectsRow[];

  ngOnInit(): void {
    this.projects = [
      {
        id: '1',
        titulo: 'Desenvolvimento do cicrApp',
        status: 0,
        cliente: {
            id: '1',
            empresa: 'Cricrano Inc.',
            nome: 'Cicrano Cicranildo',
        },
        data_inicio: '11/08/2023',
        valor: 'R$ 25000.00',
      }
    ]
  }
}
