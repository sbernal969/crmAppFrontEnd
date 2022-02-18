import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyResponse } from '../models/interface/currency-response.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private url = environment.apiUrl + 'currency';

  constructor(private http: HttpClient) { }

  public getCurrency(): Observable<CurrencyResponse>{
    return this.http.get<CurrencyResponse>(this.url + '/get');
  }
}
