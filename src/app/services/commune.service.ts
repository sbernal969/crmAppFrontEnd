import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommuneResponse } from '../models/interface/commune-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  private url = environment.apiUrl + 'communes';

  constructor(private http: HttpClient) { }

  public getCommunes(): Observable<CommuneResponse>{
    return this.http.get<CommuneResponse>(this.url + '/get');
  }
}
