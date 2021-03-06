import { ForgotResponse } from "./../models/interface/forgot.interface";
import { LoginResponse } from "../models/interface/login.interface";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class LoginService {
  private url = environment.apiUrl;
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
    return this.http.post<LoginResponse>(this.url + 'login/user', body, httpOptions)
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
    return this.http.post<ForgotResponse>(this.url + 'forgotpassword/post', body, httpOptions)
  }
}
