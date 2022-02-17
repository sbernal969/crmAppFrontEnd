import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

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

   customer: Customer;
   

  constructor(
    private customerService: CustomerService,
    private router: Router,
    ) {}



  ngOnInit(): void {
    this.customerService.getCustomer(1)
    .subscribe(
      res => {
        if(res){
          console.log(res.data);
          this.customer = res.data;
        }}
    )


  }

  btnHome() {
    console.log("entra al home");
  this.router.navigate(
    ['/homepage/']
  );
  }

}
