import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/interface/customer.interface';
import { SearchCustomers } from 'src/app/models/interface/search-customers.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list-results',
  templateUrl: './customers-list-results.component.html',
  styleUrls: ['./customers-list-results.component.css']
})

export class CustomersListResultsComponent implements OnInit {

  filters: SearchCustomers;
  customers: Customer[] = [
    {
    idCustomer: 1,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 1,
    countryId: 24,
    countryName: "jsfn"
  },
  {
    idCustomer: 2,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 1,
    countryId: 24,
    countryName: "jsfn"
  },
  {
    idCustomer: 3,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 1,
    countryId: 24,
    countryName: "jsfn"
  },
  {
    idCustomer: 4,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 1,
    countryId: 24,
    countryName: "jsfn"
  },
  {
    idCustomer: 5,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 0,
    countryId: 24,
    countryName: "jsfn"
  },
  {
    idCustomer: 6,
    personalId : "177832332",
    name : "Naara",
    familyFirstName : "Castro",
    familySecondName: "Pinto",
    birth: "25-05-1991",
    nationalityId: 214, 
    nacionalityName: "Chilena",
    genderId: 1,
    genderType: "Femenino",
    email: "prueba@mail.cl",
    mobileNumber: 912345678,
    mobileNumberId: 1,
    mobileNumberCode: "sdf",
    fixNumberId: 234,
    fixNumber: 213,
    fixNumberCode: "22222222",
    addressCountryId: 3984,
    addressCountryName: "sjfn",
    addressStreet: "rgdfg",
    addressNumber: 1224,
    addressComune: "lascondes",
    addressPostalCode: "465",
    addressCity: "djfbd",
    addressAditional: "infoadicional",
    income: 1200,
    currencyId: 4354,
    currencyName: "CLP",
    tipeOfClient: 0,
    countryId: 24,
    countryName: "jsfn"
  }
];


  constructor(private customerService: CustomerService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    /* this.filters = this.router.getCurrentNavigation().extras.state.filters; */
    /* this.customerService.searchCustomer(this.filters)
      .subscribe(
        res => {
          if(res){
            if(res.codigo >= 300){
              console.log(res.mensaje);
              return;
            }
            else{
              this.customers = this.customers.concat(res.data);
            } 
          }
        }
      ) */
  }   

  viewCustomer(customer: Customer){
    this.router.navigateByUrl('/visualization', { state: {idCustomer: customer.idCustomer, origen: 2}})
    
    }
  
  btnHome() {
    this.router.navigateByUrl(
      '/homepage'
    );
    }

  btnBack() {
    this.location.back();
  }

  btnSearchPage(){
    this.router.navigateByUrl('/search-page');
  }
}

