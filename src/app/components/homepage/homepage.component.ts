import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  nombre: any = '';
  currentUser: any = "";
  rol?: number;

  constructor(private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);
    
    this.rol = this.currentUser.typeRol;
  }

  ngOnInit(): void {
    this.nombre = this.currentUser.name + ' ' + this.currentUser.lastname;
  }
}
