import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProposalsRow } from '@shared/components/table-list/table-list.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropostasService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/propostas/v1/propostas';

  constructor(private http: HttpClient) {}

  postPropostas(proposta: unknown, idCliente: string): Observable<unknown> {
    if (!idCliente) {
      return of([]);
    }

    return this.http
      .post<unknown>(`${this.baseUrl}/${idCliente}`, {
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

  getPropostas(idsCliente: string[]): Observable<ProposalsRow[]> {
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

  deleteProposta(idContrato: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${idContrato}`).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }
}
