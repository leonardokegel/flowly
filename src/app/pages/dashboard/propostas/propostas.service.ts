import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropostasService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/propostas/v1/propostas';

  constructor(private http: HttpClient) {}

  postPropostas(proposta: unknown, idCliente: string): Observable<unknown> {
    return this.http
      .post<unknown>(`${this.baseUrl}/${idCliente}`, {
        body: proposta,
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

  // getClientes(idUsuario: string, view = 'completa'): Observable<ClientRow[] | IDadosClientesState[]> {
  //   return this.http.get<ClientRow[] | IDadosClientesState[]>(`${this.baseUrl}/${idUsuario}`, {
  //     params: new HttpParams().set('view', view)
  //   }).pipe(
  //     catchError((err) => {
  //       console.log(err);
  //       return throwError(() => err.error);
  //     })
  //   );
  // }
}
