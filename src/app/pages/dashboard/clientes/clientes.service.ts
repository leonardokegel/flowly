import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientRow } from '@shared/components/table-list/table-list.model';
import { Observable, catchError, throwError, of } from 'rxjs';
import { IDadosClientesState } from 'src/app/store/app-state';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/clientes/v1/clientes';

  constructor(private http: HttpClient) {}

  criar(idUsuario: string, body: IDadosClientesRequest) {
    return this.http.post<IDadosClientesRequest>(`${this.baseUrl}/${idUsuario}`, body).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }

  getClientes(
    idUsuario: string,
    view = 'completa'
  ): Observable<ClientRow[] | IDadosClientesState[]> {
    if (!idUsuario) {
      return of([]);
    }
    return this.http
      .get<ClientRow[] | IDadosClientesState[]>(
        `${this.baseUrl}/${idUsuario}`,
        {
          params: new HttpParams().set('view', view),
        }
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => err.error);
        })
      );
  }

}

export interface IDadosClientesRequest {
  empresa: string;
  nome: string;
  email: string;
  telefone?: string;
}
