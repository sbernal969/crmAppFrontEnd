import { ForgotResponse } from "./../models/interface/forgot.interface";
import { LoginResponse } from "../models/interface/login.interface";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root",
})
export class LoginService {
  private jsonURL = "https://crmsiigroup.herokuapp.com/v1/login/user";
  private jsonForgotURL = "https://crmsiigroup.herokuapp.com/v1/forgotpassword/post";
  private isAuth = new BehaviorSubject<boolean>(true);
  isAuth$ = this.isAuth.asObservable();

  constructor(private http: HttpClient, private route: Router) {}

  public getJSON(user: any, password: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    const params = new HttpParams().set("user", user).set("password", password);
    const usuario = {
      user: user,
      password: password,
    };

    const body = JSON.stringify(usuario);
    console.log(params);
    return this.http.post<LoginResponse>(this.jsonURL, body, httpOptions).pipe(
      tap((data: any) => console.log("Respuesta Servicio : ", data)),
      catchError(this.handleError("NOK Respuesta Servicio", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("currentUser")) {
      this.isAuth.next(true);
      return true;
    } else {
      this.route.navigateByUrl("/login");
      this.isAuth.next(false);
      return false;
    }
  }

  login(data: any) {
    this.isAuth.next(true);
    localStorage.setItem("currentUser", data);
  }

  logOut() {
    this.isAuth.next(false);
    localStorage.removeItem("currentUser");
    this.route.navigateByUrl("/login");
  }

  getUser() {
    return localStorage.getItem("currentUser");
  }

  public getForgot(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    const params = new HttpParams().set("user", user);
    const usuario = {
      user: user,
    };
    const body = JSON.stringify(usuario);
    console.log(params);
    return this.http.post<ForgotResponse>(this.jsonForgotURL, body, httpOptions).pipe(
      tap((data: any) => console.log("Respuesta Servicio : ", data)),
      catchError(this.handleError("NOK Respuesta Servicio", []))
    );
  }
}
