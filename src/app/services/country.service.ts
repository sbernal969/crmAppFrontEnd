import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryResponse } from '../models/interface/country-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = environment.apiUrl + 'country';

  constructor(private http: HttpClient) { }

  public getCountry(): Observable<CountryResponse>{
    return this.http.get<CountryResponse>(this.url + '/get');
  }
}
