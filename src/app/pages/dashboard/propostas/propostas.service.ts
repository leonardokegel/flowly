/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { catchError, Observable, of, throwError } from 'rxjs';

import { IProposta } from './propostas.component';

@Injectable({
  providedIn: 'root',
})
export class PropostasService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/propostas/v1/propostas';

  constructor(private http: HttpClient) {}

  criar(
    proposta: ICriarPropostaRequest,
    idCliente: string,
    status = 0
  ): Observable<unknown> {
    if (!idCliente) {
      return of([]);
    }

    return this.http
      .post<ICriarPropostaRequest>(`${this.baseUrl}/${idCliente}`, {
        titulo: proposta,
        status: status,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

  editar(idProposta: any, proposta: any): Observable<unknown> {
    if (!idProposta) {
      return of([]);
    }

    return this.http
      .put<IProposta>(`${this.baseUrl}/${idProposta}`, {
        titulo: proposta.titulo,
        status: proposta.status,
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

    return this.http.delete<unknown>(`${this.baseUrl}/${idProposta}`).pipe(
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

  editProposta(proposta: IEditarPropostaRequest): Observable<any> {
    if (!proposta) {
      return of();
    }
    return this.http
      .put(`${this.baseUrl}/${proposta.id}`, proposta)
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

export interface IEditarPropostaRequest {
  id: string;
  titulo: string;
  status: number;
}
