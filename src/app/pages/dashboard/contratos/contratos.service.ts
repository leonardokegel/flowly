import { Observable, catchError, throwError, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractsRow } from '@shared/components/table-list/table-list.model';
@Injectable({
  providedIn: 'root',
})
export class ContratosService {
  private baseUrl =
    'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/contratos/v1/contratos';

  constructor(private http: HttpClient) {}

  getContratos(idsCliente: string[]): Observable<ContractsRow[]> {
    if (!idsCliente) {
      return of([]);
    }
    return this.http.get<ContractsRow[]>(`${this.baseUrl}`, {
      params: new HttpParams().set('id', idsCliente.toString())
    }).pipe(
      catchError((err) => {
        return throwError(() => err.error);
      })
    );
  }
}
