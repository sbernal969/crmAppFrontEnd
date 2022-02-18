import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
 /*  customer = { 
    id: "12345688-2",
    fullName: "Naara Abigail Castro Pinto",
    dateBirth: "25-05-1991",
    nacionality: "Chilena", 
    gender: "Femenino",
    mail: "prueba@mail.cl",
    mobile: "912345678",
    fixMobile: "22222222",
    city: 'Santiago',
    street: 'Santa Zita',
    number: '2466',
    commune: 'Las Condes',
    postalCode: '245678',
    info: 'janfjsndfjnsfjsnkjsnfvnfjvnkjfnvjdfvndjfnjvndfjnvfdjvndkfjvnjvndfj',
    currency:"CLP",
    amount: '1500000',
   } */

   customer: Customer = {
     personalId: '',
     name: '',
     familyFirstName: '',
     familySecondName: '',
     birth: '',
     countryId: 0,
     countryName: '',
     nationalityId: 0,
     nacionalityName: '',
     genderId: 0,
     genderType: '',
     email: '',
     mobileNumberId: 0,
     mobileNumber: 0,
     mobileNumberCode: '',
     fixNumberId: 0,
     fixNumber: 0,
     fixNumberCode: '',
     addressCountryId: 0,
     addressCountryName: '',
     addressStreet: '',
     addressNumber: 0,
     addressComune: '',
     addressPostalCode: '',
     addressCity: '',
     addressAditional: '',
     income: 0,
     currencyId: 0,
     currencyName: '',
     tipeOfClient: 0
   };
   isCustomer: number = 0;
   

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private msgService: MessageService,
    
    ) {}



  ngOnInit() {
    this.subscription = this.msgService.getMessage().subscribe(
      msg => console.log(msg)
      
    )
    this.customerService.getCustomer(28)
    .subscribe(
      res => {
        if(res){
          console.log(res.data);
          this.customer = res.data;
          this.isCustomer = res.data.tipeOfClient;
        }}
    )


  }

  btnHome() {
  this.router.navigate(
    ['/homepage/']
  );
  }

  btnCreate() {
  this.router.navigate(
    ['/create-customer/']
  );
  }



}
