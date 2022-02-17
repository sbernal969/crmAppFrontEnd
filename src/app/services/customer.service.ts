import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerResponse } from '../models/interface/customer-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = environment.apiUrl + 'customers';
  constructor(private http: HttpClient){}
  
  public getCustomer(customerId:number){
    let params = new HttpParams().set("customerId", customerId.toString());
    return this.http.get<CustomerResponse>(this.url + '/getCustomerById', {params: params});
    
  }

}
