import { catchError, throwError, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectsRow } from '@shared/components/table-list/table-list.model';
@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/projetos/v1/projetos';

  constructor(private http: HttpClient) {}

  buscar(idsClientes: string[]): Observable<ProjectsRow[]> {
    return this.http
      .get<ProjectsRow[]>(`${this.baseUrl}`, {
        params: new HttpParams().set('id', idsClientes.toString()),
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

  cadastrar(idCliente: string, body: ICadastroProjetosRequest): Observable<ICadastroProjetoResponse> {
    return this.http.post<ICadastroProjetoResponse>(`${this.baseUrl}/${idCliente}`, body).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }

  deletar(idProjeto: string): Observable<unknown> {
    return this.http.delete<unknown>(`${this.baseUrl}/${idProjeto}`).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }
}

export interface ICadastroProjetosRequest {
  status: string;
  titulo: string;
  data_inicio: string;
  valor: string;
  descricao: string;
}

export interface ICadastroProjetoResponse {
  id: number;
  clientId: number;
  status: string;
  titulo: string;
  data_inicio: string;
  valor: string;
  descricao: string;
}
