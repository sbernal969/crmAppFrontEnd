import { LoginResponse } from './../interface/login.interface';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private jsonURL = 'https://crmsiigroup.herokuapp.com/v1/login/user';

  constructor(private http: HttpClient, ) {}

  public getJSON(user: any, password: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    const params = new HttpParams().set('user', user).set('password', password);
    const usuario = {
      user: user,
      password:password
    }

    const body = JSON.stringify(usuario)
    console.log(params);
    return this.http
      .post<LoginResponse>(this.jsonURL,body , httpOptions)
      .pipe(
        tap((data: any) => console.log('Respuesta Servicio : ', data)),
        catchError(this.handleError('NOK Respuesta Servicio', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  isAuthenticated(): boolean {
    return true;
  }
}
