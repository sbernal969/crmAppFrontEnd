import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';

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
   idCustomer: number = 0;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    ) 
    
    {
      try {
        this.idCustomer = this.router.getCurrentNavigation().extras.state.idCustomer;
      } catch (error) {
        this.btnHome();
      }
      
    }


  ngOnInit() {
       

    this.customerService.getCustomer(this.idCustomer)
    .subscribe(
      res => {
        if(res){
          this.customer = res.data;
          this.isCustomer = res.data.tipeOfClient;
        }}
    )
  }

  btnHome() {
  this.router.navigateByUrl(
    '/homepage'
  );
  }

  btnCreate() {
  this.router.navigateByUrl(
    '/create-customer'
  );
  }


}
