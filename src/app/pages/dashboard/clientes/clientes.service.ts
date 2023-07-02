import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientRow } from '@shared/components/table-list/table-list.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/clientes/v1/clientes';

  constructor(private http: HttpClient) {}

  getClientes(idUsuario: string): Observable<ClientRow[]> {
    console.log(idUsuario)
    return this.http.get<ClientRow[]>(`${this.baseUrl}/${idUsuario}`).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => err.error);
      })
    );
  }
}
