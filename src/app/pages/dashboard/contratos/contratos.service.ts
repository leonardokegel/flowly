import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContratosService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/contratos/v1/contratos';

  constructor(private http: HttpClient) {}

  criar(
    contrato: ICriarContatoRequest,
    idCliente: string
  ): Observable<unknown> {
    if (!idCliente) {
      return of([]);
    }

    return this.http
      .post<ICriarContatoRequest>(`${this.baseUrl}/${idCliente}`, {
        titulo: contrato,
        status: 0,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

  deletar(idContrato: string): Observable<unknown> {
    if (!idContrato) {
      return of([]);
    }

    return this.http.delete<string>(`${this.baseUrl}/${idContrato}`).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }

  getContratos(idsCliente: string[]): Observable<ContractsRow[]> {
    if (!idsCliente) {
      return of([]);
    }
    return this.http
      .get<ContractsRow[]>(`${this.baseUrl}`, {
        params: new HttpParams().set('id', idsCliente.toString()),
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.error);
        })
      );
  }
}

export interface ICriarContatoRequest {
  titulo: string;
  status: number;
}
