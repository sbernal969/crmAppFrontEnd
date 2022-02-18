import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenderResponse } from '../models/interface/gender-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private url = environment.apiUrl + 'gender';

  constructor(private http: HttpClient) { }

  public getGenders(): Observable<GenderResponse>{
    return this.http.get<GenderResponse>(this.url + '/get');
  }
}
