import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
@Injectable({
  providedIn: 'root',
})
export class ContratosService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/contratos/v1/contratos';

  constructor(private http: HttpClient) {}

  getContratos(idCliente: string): Observable<ContractsRow[]> {
    return this.http.get<ContractsRow[]>(`${this.baseUrl}/${idCliente}`).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }
}
