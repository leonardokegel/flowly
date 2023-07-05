import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropostasService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/propostas/v1/propostas';

  constructor(private http: HttpClient) {}

  criar(
    proposta: ICriarPropostaRequest,
    idCliente: string
  ): Observable<unknown> {
    if (!idCliente) {
      return of([]);
    }

    return this.http
      .post<ICriarPropostaRequest>(`${this.baseUrl}/${idCliente}`, {
        titulo: proposta,
        status: 0,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

  deletar(idProposta: string): Observable<unknown> {
    if (!idProposta) {
      return of([]);
    }

    return this.http.delete<string>(`${this.baseUrl}/${idProposta}`).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }

  getPropostas(idsCliente: string[]): Observable<ProposalsRow[]> {
    if (!idsCliente) {
      return of([]);
    }
    return this.http
      .get<ProposalsRow[]>(`${this.baseUrl}`, {
        params: new HttpParams().set('id', idsCliente.toString()),
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.error);
        })
      );
  }
}

export interface ICriarPropostaRequest {
  titulo: string;
  status: number;
}