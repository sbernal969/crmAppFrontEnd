import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  customer = { 
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
    monthly:"453895",  
   }

  constructor() { }

  ngOnInit(): void {
  }

}
