import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/interface/customer.interface';
import { SearchCustomers } from 'src/app/models/interface/search-customers.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { PopupConfirmacionComponent } from '../../utils/popup-confirmacion/popup-confirmacion.component';

@Component({
  selector: 'app-customers-list-results',
  templateUrl: './customers-list-results.component.html',
  styleUrls: ['./customers-list-results.component.css']
})

export class CustomersListResultsComponent implements OnInit {

  filters: SearchCustomers = {
    personalId: null,
    name: null,
    familyFirstName: null,
    incomeMax: null,
    incomeMin: null,
    idCurrency: null,
    isCustomer: true,
    isProspect: false
  }
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private location: Location,
              public dialog: MatDialog) { }

  ngOnInit(): void {
      /* this.filters = this.router.getCurrentNavigation().extras.state.filters; */ 
       this.customerService.searchCustomer(this.filters)
      .subscribe(
        res => {
          if(res){
            if(res.codigo >= 300){
              console.log(res.mensaje);
              return;
            }
            else{ 
              if(res.data.length == 0){
                this.openDialog();
              }
              console.log(res.data);
              
              this.customers = this.customers.concat(res.data);
            } 
          }
        }
      ) 
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
    this.router.navigateByUrl('/search-customer-prospect');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupConfirmacionComponent, {
      width: "300px",
      data: {
        title: "Message",
        message: "Not data found",
        msgBtnNo: "No",
        msgBtnYes: "Ok",
        option: 0,
        hiddenBtn: true
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.btnSearchPage();
    });
  }
}

