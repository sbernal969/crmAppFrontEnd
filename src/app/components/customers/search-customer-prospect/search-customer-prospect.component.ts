import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import * as rutUtils from "src/utils/rutUtils";
import { Currency } from 'src/app/models/interface/currency.interface';
import { CurrenciesService } from 'src/app/services/currency.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmacionComponent } from '../../utils/popup-confirmacion/popup-confirmacion.component';
import { SearchCustomers } from 'src/app/models/interface/search-customers.interface';

@Component({
  selector: 'app-search-customer-prospect',
  templateUrl: './search-customer-prospect.component.html',
  styleUrls: ['./search-customer-prospect.component.css']
})

export class SearchCustomerProspectComponent implements OnInit {
  @ViewChild('htmlFormSearch') htmlFormSearch: NgForm;
  isChecked: boolean = true;
  chkCustomer: boolean = false;
  chkProspect: boolean = false;
  currencies: Currency[] = [];
  rut = new FormControl();
  errMinMayor: boolean = true;
  currentUser: any = "";
  rol?: number;
  validateMinMax: boolean = true; 

  searchCustomers: SearchCustomers = {
    personalId: "",
    name: "",
    familyFirstName: "",
    incomeMax: 0,
    incomeMin: 0,
    idCurrency: 0,
    isCustomer: false,
    isProspect: false    
  };
  

  ngOnInit(): void {
    this.loadCmbCurrency();
  }


  constructor(
    private router: Router,
    private currencyService: CurrenciesService,
    public dialog: MatDialog,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.rol = this.currentUser.typeRol;
  }


  validation_messages = {
    personalId: [
      { type: "minlength", message: "At least 9 characters long" },
      { type: "pattern", message: "Only numbers and letter K" },
      { type: "NoEmpresa", message: "Rut only person" },
      { type: "rutError", message: "Invalid Rut" }
    ],
    name: [
      { type: "minlength", message: "At least 2 characters long" },
      { type: "pattern", message: "Only letters" },
    ],
    firstName: [
      { type: "minlength", message: "At least 2 characters long" },
      { type: "pattern", message: "Only letters" },
    ],

    incomeMin: [
      { type: "required", message: "Required Monthy Income" },
      { type: "pattern", message: "Only numbers" },
      { type: "minlength", message: "At least 4 characters long" },
    ],
    incomeMax: [
      { type: "required", message: "Required Monthy Income" },
      { type: "pattern", message: "Only numbers" },
      { type: "minlength", message: "At least 4 characters long" },
    ],

    idCurrency: [{ type: "required", message: "Required Monthy Income" }],

  };


  formSearch = new FormGroup({
    personalId: new FormControl("", [
      Validators.minLength(9),
      Validators.pattern("^[0-9]*[0-9Kk]*$"),
      this.validatorNoEmpresa,
      this.validatorRut,
    ]),
    name: new FormControl("", [
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    firstName: new FormControl("", [
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    incomeMin: new FormControl("", [
      Validators.minLength(4),
      Validators.pattern(/^[0-9]\d*$/),
    ]),
    incomeMax: new FormControl("", [
      Validators.minLength(4),
      Validators.pattern(/^[0-9]\d*$/),
    ]),
    idCurrency: new FormControl(""),
  });


  validatorRut(rut) {
    const value = rut.value;
    if (value !== null && value !== "") {
      if (!rutUtils.validateRut(value)) {
        return { rutError: true };
      }
    }
    return null;
  }


  validatorNoEmpresa(rut) {
    const value = rut.value as string;
    if (value !== null && value !== " ") {

      if (!rutUtils.validateNoEmpresa(value)) {
        return { NoEmpresa: true };
      }
    }
    return null;
  }


  validatorMonthyIncome(incomeMin:string,incomeMax:string,idCurrency) {
    if (incomeMin == "" || incomeMin == null) {
      if (incomeMax !== "" || idCurrency >= 1 || idCurrency == null) {
        //console.log("Min no puede ser vacio" + incomeMin)
        this.formSearch.controls["incomeMin"].setValidators(Validators.required)
        this.formSearch.controls["incomeMin"].updateValueAndValidity();
        this.validateMinMax = false;
      }
    } else { this.validateMinMax = true; }

    if (incomeMax == "" || incomeMax == null) {
      if (incomeMin !== "" || idCurrency >= 1 || idCurrency == null) {
       // console.log("Max no puede ser vacio" + incomeMax)
        this.formSearch.controls["incomeMax"].setValidators(Validators.required)
        this.formSearch.controls["incomeMax"].updateValueAndValidity();
        this.validateMinMax = false
      }
    } else { this.validateMinMax = true; }

    if (idCurrency < 1) {
      if (incomeMin !== "" || incomeMax !== "") {
        //console.log("Currency no puede ser vacio false " + idCurrency)
        this.formSearch.controls["idCurrency"].setValidators(Validators.required)
        this.formSearch.controls["idCurrency"].updateValueAndValidity();
        this.validateMinMax = false
      }
    } else { this.validateMinMax = true; }

    if (this.validateMinMax == true && incomeMax !== "" && incomeMin !== ""){ 
      if (parseInt(incomeMax) <= parseInt(incomeMin)) {
        this.errMinMayor = false;
        this.validateMinMax = false
      } else {
        this.errMinMayor = true;
        this.validateMinMax = true
        this.okValidateMinMax();
      }
    }


  }

  
  onChangeMin() { this.errMinMayor = true; }


  onChkCustomer(event: MatCheckboxChange) { 
    if (event.source.checked) {    
      this.chkCustomer = true;
      this.isChecked = true;     
    } else {
      this.chkCustomer = false;
      if (this.chkProspect == false) {
        this.isChecked = false;
      }
    }
  }


  onChkProspect(event: MatCheckboxChange) {  
    if (event.source.checked) {
      this.chkProspect = true;
      this.isChecked = true;     
    } else {
      this.chkProspect = false;
      if (this.chkCustomer == false) {
        this.isChecked = false;
      }

    }
  }


  loadCmbCurrency() {
    this.currencyService.getCurrency().subscribe((res) => {
      if (res) {
        this.currencies = this.currencies.concat(res.data);
      }
    });
  }


  btnHome() {
    const incomeMin = this.formSearch.controls.incomeMin.value || "";
    const incomeMax = this.formSearch.controls.incomeMax.value || "";
    const idCurrency = this.formSearch.controls.idCurrency.value || "";
    const name = this.formSearch.controls.name.value || "";
    const firstName = this.formSearch.controls.firstName.value || "";
    
    if(this.chkProspect == true || this.chkCustomer == true ||incomeMin !== "" || incomeMax !== "" || idCurrency !== ""  || name !== "" || firstName !== ""){
       this.openDialogHome();}else{this.router.navigate(["/homepage/"]);}
 
  }


  okValidateMinMax() { 
    if (this.validateMinMax == true && this.rol == 2) {      
      this.makeObjSearch()
    }

  }


  btnSearch() {
    const incomeMin = this.formSearch.controls.incomeMin.value || "";
    const incomeMax = this.formSearch.controls.incomeMax.value || "";
    const currency = this.formSearch.controls.idCurrency.value || "";

    if (this.formSearch.valid) {
      if (this.chkCustomer == false && this.chkProspect == false) {
        this.isChecked = false;
      }
      else {     
        if (incomeMin !== "" || incomeMax !== "" || currency !== ""
          ) {    
            this.validatorMonthyIncome(incomeMin ,incomeMax ,currency);           
          }else (this.makeObjSearch())
        
      }
    }
  }


  makeObjSearch(){
    this.searchCustomers.personalId   = this.formSearch.controls.personalId.value || null,
    this.searchCustomers.name   = this.formSearch.controls.name.value || null,
    this.searchCustomers.familyFirstName   = this.formSearch.controls.firstName.value|| null,
    this.searchCustomers.incomeMax   = parseInt(this.formSearch.controls.incomeMax.value) || null,
    this.searchCustomers.incomeMin   = parseInt(this.formSearch.controls.incomeMin.value) || null,
    this.searchCustomers.idCurrency = this.formSearch.controls.idCurrency.value || null,
    this.searchCustomers.isCustomer = this.chkCustomer,
    this.searchCustomers.isProspect= this.chkProspect,
    console.table(this.searchCustomers)
    this.router.navigateByUrl('/customers-list-results', { state: {filters: this.searchCustomers}})
  }


  btnClearSearch() {
    this.chkCustomer = false;
    this.chkProspect = false;
    this.isChecked = true;
    this.errMinMayor = true;
    this.validateMinMax = true;   
    this.formSearch.controls["incomeMin"].setValidators(null);
    this.formSearch.controls["incomeMin"].setValidators([Validators.minLength(4), Validators.pattern(/^[0-9]\d*$/)])
    this.formSearch.controls["incomeMin"].updateValueAndValidity();
    this.formSearch.controls["incomeMax"].setValidators(null);
    this.formSearch.controls["incomeMax"].setValidators([Validators.minLength(4), Validators.pattern(/^[0-9]\d*$/)])
    this.formSearch.controls["incomeMax"].updateValueAndValidity();
    this.formSearch.controls["idCurrency"].setValidators(null);
    this.formSearch.controls["idCurrency"].updateValueAndValidity();
    setTimeout(() =>
      this.htmlFormSearch.resetForm(), 0)
     

  }


  openDialogHome(): void {
    const dialogRef = this.dialog.open(PopupConfirmacionComponent, {
      width: "400px",
      data: {
        title: "Search Customer and Prospect",
        message: "¿Are you sure?",
        msgBtnNo: "No",
        msgBtnYes: "Yes",
        option: 0,
        hiddenBtn: false
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 1) { this.router.navigate(["/homepage/"]); } else { console.log("close") }

    });
  }

}
