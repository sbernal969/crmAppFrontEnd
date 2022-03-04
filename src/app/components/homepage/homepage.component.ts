import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  nombre: any = '';
  currentUser: any = "";
  rol?: number;

  constructor(private route: ActivatedRoute,  private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');  
    this.rol = this.currentUser.typeRol;
  }

  ngOnInit(): void {
    this.nombre = this.currentUser.name + ' ' + this.currentUser.lastname;
  }

  btnCreate(){this.router.navigate(["/create-customer/"]);}

  btnSearch(){this.router.navigate(["/search-customer-prospect/"]);}


}


