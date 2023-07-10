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
    contrato: ICriarContratoRequest,
    idCliente: string,
    status = 0
  ): Observable<unknown> {
    if (!idCliente) {
      return of([]);
    }

    return this.http
      .post<ICriarContratoRequest>(`${this.baseUrl}/${idCliente}`, {
        titulo: contrato,
        status: status,
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

  editar(
    contrato: IEditarContratoRequest
  ): Observable<IEditarContratoResponse> {
    return this.http.put<IEditarContratoResponse>(`${this.baseUrl}/${contrato.id}`, contrato).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }
}

export interface ICriarContratoRequest {
  titulo: string;
  status: number;
}

export interface IEditarContratoRequest {
  id: string;
  titulo: string;
  status: number;
}

export interface IEditarContratoResponse {
  titulo: string;
  status: number;
}
