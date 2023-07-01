import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://flowly.eba-fxmwzwfp.us-east-1.elasticbeanstalk.com/';

  constructor(private http: HttpClient) {}

  signUp(form: ISignUp): Observable<ISignUpResponse> {
    return this.http
      .post<ISignUpResponse>(`${this.baseUrl}users/register`, form)
      .pipe(
        catchError((err) => {
          console.log(err);

          return throwError(() => err.error);
        })
      );
  }

  signIn(form: ISignIn): Observable<ISignInResponse> {
    console.log(form);
    return this.http
      .post<ISignInResponse>(`${this.baseUrl}users/login`, form)
      .pipe(catchError((err) => throwError(() => err.error)));
  }
}

export interface ISignIn {
  email: string;
  senha: string;
}

export interface ISignInResponse {
  id: string;
  email: string;
  nome: string;
  token: string;
}

export interface ISignUp {
  email: string;
  senha: string;
  nome: string;
}

export interface ISignUpResponse {
  mensagem: string;
  statusCode?: number;
}
