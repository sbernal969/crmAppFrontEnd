import { CreateCustomer } from './../models/interface/create-customer.interface';
import { Customer } from 'src/app/models/interface/customer.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerResponse } from '../models/interface/customer-response.interface';
import { CreateCustomerResponse } from '../models/interface/create-customer-response.interface';
import { Observable } from 'rxjs';
import { SearchCustomers} from '../models/interface/search-customers.interface';
import { SearchCustomersResponse } from '../models/interface/search-customers-response.interface';

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
  
  public postCustomer(customer:CreateCustomer): Observable <CreateCustomerResponse> {  
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };   
    const body = JSON.stringify(customer);   
    return this.http.post<CreateCustomerResponse>(this.url + '/create',body, httpOptions);
  }

  public searchCustomer(searchCustomer: SearchCustomers): Observable <SearchCustomersResponse> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };  
    const body = JSON.stringify(searchCustomer); 
    return this.http.post<SearchCustomersResponse>(this.url + '/search', body, httpOptions);
  }

}
