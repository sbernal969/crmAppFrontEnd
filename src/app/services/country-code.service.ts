import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryCodeResponse } from '../models/interface/country-code-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryCodeService {

  private url = environment.apiUrl + 'code';

  constructor(private http: HttpClient) { }

  public getCountryCode(){
    return this.http.get<CountryCodeResponse>(this.url + '/get');
  }
}
