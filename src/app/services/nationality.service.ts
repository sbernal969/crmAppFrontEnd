import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NationalityResponse } from '../models/interface/nationality-response.interface';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  private url = environment.apiUrl + 'nationality';

  constructor(private http: HttpClient) { }

  public getNationalities(): Observable<NationalityResponse>{
    return this.http.get<NationalityResponse>(this.url + '/get');
  }
}
