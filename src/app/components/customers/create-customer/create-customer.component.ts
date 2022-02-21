import { CreateCustomer } from "./../../../models/interface/create-customer.interface";
import { Component, ViewChild } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  AbstractControl, 
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import { MatChipInputEvent, MatChipList } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import * as rutUtils from "src/utils/RutUtils";
import { Router } from "@angular/router";
import { CountryService } from "../../../services/country.service";
import { Country } from "src/app/models/interface/country.interface";
import { NationalityService } from "../../../services/nationality.service";
import { Nationality } from "../../../models/interface/nationality.interface";
import { GenderService } from "../../../services/gender.service";
import { Gender } from "src/app/models/interface/gender.interface";
import { CountryCodeService } from "../../../services/country-code.service";
import { CountryCode } from "../../../models/interface/country-code.interface";
import { Currency } from "src/app/models/interface/currency.interface";
import { CurrenciesService } from "../../../services/currency.service";
import { PopupConfirmacionComponent } from "../../utils/popup-confirmacion/popup-confirmacion.component";
import { MatDialog } from "@angular/material/dialog";
import { CustomerService } from "src/app/services/customer.service";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MessageService } from "src/app/services/message.service";

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "DD-MM-YYYY",
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CreateCustomerComponent {
  isChecked: boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedFilter = "1";
  countries: Country[] = [];
  nationalities: Nationality[] = [];
  genders: Gender[] = [];
  // countryCodes: CountryCode[] = [];
  currencies: Currency[] = [];
  resultado!: string;
  selectedCheck = -1;
  rut = new FormControl();
  nacionalidadCtrl = new FormControl();
  filteredNacionalidad: Observable<string[]>;
  nacionalidades: string[] = [];

  idCustomerCreated: any;

  customer: CreateCustomer = {
    personalId: "",
    name: "",
    familyFirstName: "",
    familySecondName: "",
    birth: "",
    country: 0,
    nationality: 0,
    gender: 0,
    email: "",
    mobileNumber: 0,
    mobileNumberCode: 0,
    fixNumber: 0,
    fixNumberCode: 0,
    addressCountry: 0,
    addressStreet: "",
    addressNumber: 0,
    addressComune: "",
    addressPostalCode: "",
    addressCity: "",
    addressAditional: "",
    income: 0,
    currency: 0,
    tipeOfClient: 0,
  };

  @ViewChild("auto") matAutocomplete: MatAutocomplete;
  @ViewChild("NacionalidadInput") NacionalidadInput;
  //@ViewChild('chipList') chipList: MatChipList;

  ngOnInit(): void {
    //this.NacionalidadInput.errorState= true
    /*  this.formCreate.get('nationality').statusChanges.subscribe(status => 
      this.NacionalidadInput.errorState = status === 'INVALID' ? true : false);  */

    /*
      this.formCreate.get('nationality').statusChanges.subscribe(
        status => this.chipList.errorState = status === 'INVALID'
      ); */

    this.loadCmbCountryBith();
    this.loadCmbNationalities();
    this.loadCmbGenders();
    // this.loadCmbCountryCode();
    this.loadCmbCurrency();
  }

  /*    allNacionalidades: string[] = [
    "Chilena",
    "Española",
    "Argentina",
    "Cubana",
    "Venezolana",
  ]; */

  constructor(
    private router: Router,
    private countryService: CountryService,
    private nationalityService: NationalityService,
    private genderService: GenderService,
    private countryCode: CountryCodeService,
    private currencyService: CurrenciesService,
    public dialog: MatDialog,
    private customerService: CustomerService,
    private msgService: MessageService
  ) {
    /*  this.filteredNacionalidad = this.nacionalidadCtrl.valueChanges.pipe(
      startWith(<string>null),
      map((nac: string | null) =>
        nac ? this._filter(nac) : this.allNacionalidades.slice()
      )
    ); */
  }

  //MATRIZ DE VALIDACION
  validation_messages = {
    rut: [
      { type: "required", message: "Required" },
      { type: "maxlength", message: "At least 9 characters long" },
      { type: "rutError", message: "Invalid Rut" },
      { type: "NoEmpresa", message: "Rut only person" },
      {
        type: "pattern",
        message: "Only numbers and letter K",
      },
    ],
    name: [
      { type: "required", message: "Required" },
      { type: "minlength", message: "At least 2 characters long" },
      { type: "pattern", message: "Only letters" },
    ],
    firstName: [
      { type: "required", message: "Required" },
      { type: "minlength", message: "At least 2 characters long" },
      { type: "pattern", message: "Only letters" },
    ],
    secondName: [
      { type: "minlength", message: "At least 2 characters long" },
      { type: "pattern", message: "Only letters" },
    ],
    dateOfBirth: [{ type: "required", message: "Required" }],
    country: [{ type: "required", message: "Required" }],
    countries: [{ type: "required", message: "Required" }],
   /*  nationality: [
      { type: "required", message: "Required" },
      { type: "validatorNacionalidad", message: "uno al menos" },
    ], */
    nacionalidad: [{ type: "required", message: "Required" }],
    gender: [{ type: "required", message: "Required" }],
    mobileNumber: [
      { type: "required", message: "Required" },
      { type: "pattern", message: "Only numbers" },
    ],
    fixNumber: [{ type: "pattern", message: "Only numbers" }],
    codeMobile: [{ type: "required", message: "Required" }],
    codefix: [{ type: "required", message: "Required" }],
    //countryAddress: [{ type: "required", message: "Required" }],
    city: [{ type: "required", message: "Required" }],
    streetName: [{ type: "required", message: "Required" }],
    number: [{ type: "required", message: "Required"},  { type: "pattern", message: "Only numbers" },],
    currency: [{ type: "required", message: "Required" }],
    monthyIncome: [
      { type: "required", message: "Required" },
      { type: "pattern", message: "Only numbers" },
      { type: "minlength", message: "At least 4 characters long" },
    ],
    email: [
      { type: "required", message: "Required" },
      { type: "pattern", message: "Invalid email" },
    ],
    commune: [

      { type: "required", message: "Required" },
    ],
    postalcode: [

      { type: "required", message: "Required" },
    ],
  };

  //CREACION DEL FORM
  formCreate = new FormGroup({
    countries: new FormControl("", [Validators.required]),
    rut: new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.pattern("^[0-9]*[0-9Kk]*$"),
      this.validatorRut,this.validatorNoEmpresa
    ]),
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    secondName: new FormControl("", [
      Validators.minLength(2),
      Validators.pattern("^[a-zA-Z ]*$"),
    ]),
    country: new FormControl("", [Validators.required]),
    dateOfBirth: new FormControl("", [Validators.required]),
  /*   nationality: new FormControl("", [
      Validators.required,
      this.validateArrayNotEmpty,
    ]), */
    nacionalidad: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    mobileNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
    ]),
    fixNumber: new FormControl("", [Validators.pattern("^[0-9]*$")]),
    codeMobile: new FormControl("", [Validators.required]),
    codefix: new FormControl(""),
    adicional: new FormControl(""),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
   // countryAddress: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    streetName: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")],),
    currency: new FormControl("", [Validators.required]),
    monthyIncome: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[0-9]*$"),
    ]),
    commune: new FormControl(""),
    postalcode: new FormControl("")
  });


  getErrorMessage() {
    console.log("messa")
    if (this.formCreate.valid) this.resultado = "Todos los datos son válidos";
    else this.resultado = "Hay datos inválidos en el formulario";
  }

  validateArrayNotEmpty(c: FormControl) {
    if (c.value && c.value.length === 0) {
      return {
        validateArrayNotEmpty: { valid: false },
      };
    }
    return null;
  }
  //NACIONALITY
  /* add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;

      const value = (event.value || "").trim();

      if (value) {
        this.nacionalidades.push(value);
        this.NacionalidadInput.errorState = false;
      }

      if (input) {
        input.value = "";
      }

      this.nacionalidadCtrl.setValue(null);
      this.nacionalidadCtrl.setValue(this.nacionalidades);

      if (this.nacionalidades.length >= 0) {
        // this.NacionalidadInput.errorState = true;
      }
    }
  }

  remove(nacionalidad: string): void {
    const index = this.nacionalidades.indexOf(nacionalidad);
    if (index >= 0) {
      this.nacionalidades.splice(index, 1);
    }
    if (this.nacionalidades.length <= 3) {
      //this.NacionalidadInput.errorState = false;
    }
  }

  setError() {
    // this.NacionalidadInput.errorState = true;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.nacionalidades.length <= 2) {
      if (!this.nacionalidades.includes(event.option.viewValue.trim())) {
        this.nacionalidades.push(event.option.viewValue);
        //this.NacionalidadInput.nativeElement.value = "";
        // this.nacionalidadCtrl.setValue(null);
        //this.NacionalidadInput.errorState = true;
      }
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allNacionalidades.filter((nacionalidad) =>
      nacionalidad.toLowerCase().includes(filterValue)
    );
  } */

  /* RUT */
  onBlurRut = (evt) => {
    /* 
  console.log("entra on blur")
  var rut = rutUtils.unFormatRut(evt.target.value);
  var rutFormateado = rutUtils.formatRut(rut);
  this.formCreate.controls.rut.setValue(rutFormateado); */
  };

  validatorRut(fc: AbstractControl) {
    const value = fc.value as string;
    if (!rutUtils.validateRut(value)) {
      return { rutError: true };
    }
    return null;
  }

  validatorNoEmpresa(fc: AbstractControl) {
    const value = fc.value as string;
    if (!rutUtils.validateNoEmpresa(value)) {
      return { NoEmpresa: true };
    }
    return null;
  }


  validatorCheck() {
    if (this.selectedCheck == -1) {
      return false;
    }
    return true;
  }

  chkCustomer(event: MatCheckboxChange) {
    if (!event.source.checked) {
      this.selectedCheck = -1;
    } else { this.selectedCheck = 1; this.isChecked = true }

  }

  chkProspect(event: MatCheckboxChange) {
    if (!event.source.checked) {
      this.selectedCheck = -1;
    } else { this.selectedCheck = 0; this.isChecked = true }

  }


  select(valor: any) {
    if (valor.value == 40) {
      this.formCreate.controls["commune"].setValidators(Validators.required)
      this.formCreate.controls["postalcode"].setValidators(null);
      this.formCreate.controls["commune"].updateValueAndValidity();
      this.formCreate.controls["postalcode"].updateValueAndValidity();
      this.formCreate.controls.commune.setValue("")
      this.selectedFilter = "0";
    } else {

      this.formCreate.controls["postalcode"].setValidators(Validators.required)
      this.formCreate.controls["commune"].setValidators(null);
      this.formCreate.controls["commune"].updateValueAndValidity();
      this.formCreate.controls["postalcode"].updateValueAndValidity();
      this.formCreate.controls.postalcode.setValue("")
      this.selectedFilter = "1";
    }
  }

  btnHome() {
    this.router.navigate(["/homepage/"]);
  }

  loadCmbCountryBith() {
    this.countryService.getCountry().subscribe((res) => {
      if (res) {
        this.countries = this.countries.concat(res.data);
      }
    });
  }

  loadCmbNationalities() {
    this.nationalityService.getNationalities().subscribe((res) => {
      if (res) {
        this.nationalities = this.nationalities.concat(res.data);
      }
    });
  }

  loadCmbGenders() {
    this.genderService.getGenders().subscribe((res) => {
      if (res) {
        this.genders = this.genders.concat(res.data);
      }
    });
  }

  // loadCmbCountryCode(){
  //   this.countryService.getCountry()
  //   .subscribe(
  //     res => {
  //       if(res){
  //         this.count = this.countryCodes.concat(res.data);
  //       }
  //     }
  //   )
  // }

  loadCmbCurrency() {
    this.currencyService.getCurrency().subscribe((res) => {
      if (res) {
        this.currencies = this.currencies.concat(res.data);
      }
    });
  }


  btnCreateCustomer() {    
    if (this.formCreate.valid) { this.createCustomer(); 
      console.log("OK")} else { console.log("NOK")}

  
  }
  createCustomer() {
    if (!this.validatorCheck()) {
      this.isChecked = false;
      return;
    } else { this.isChecked = true; }


    const dialogRef = this.dialog.open(PopupConfirmacionComponent, {
      width: "300px",
      data: {
        title: "Create Customer",
        message: "¿Are you sure?",
        msgBtnNo: "No",
        msgBtnYes: "Yes",
        option: 0,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 1) {
        this.customer.personalId = this.formCreate.controls.rut.value;
        (this.customer.name = this.formCreate.controls.name.value),
          (this.customer.familyFirstName =
            this.formCreate.controls.firstName.value),
          (this.customer.familySecondName =
            this.formCreate.controls.secondName.value),
          (this.customer.birth = moment(
            this.formCreate.value.dateOfBirth
          ).format("DD-MM-YYYY")),
          (this.customer.country = this.formCreate.controls.country.value),
          (this.customer.nationality =
            this.formCreate.controls.nacionalidad.value),
          (this.customer.gender = this.formCreate.controls.gender.value),
          (this.customer.email = this.formCreate.controls.email.value),
          (this.customer.mobileNumber =
            this.formCreate.controls.mobileNumber.value);
        (this.customer.mobileNumberCode =
          this.formCreate.controls.codeMobile.value),
          (this.customer.fixNumber = this.formCreate.controls.fixNumber.value),
          (this.customer.fixNumberCode =
            this.formCreate.controls.codefix.value),
          (this.customer.addressCountry =
            this.formCreate.controls.countries.value),
          (this.customer.addressStreet =
            this.formCreate.controls.streetName.value),
          (this.customer.addressNumber = this.formCreate.controls.number.value),
          (this.customer.addressComune =
            this.formCreate.controls.commune.value),
          (this.customer.addressPostalCode =
            this.formCreate.controls.postalcode.value),
          (this.customer.addressCity = this.formCreate.controls.city.value),
          (this.customer.addressAditional =
            this.formCreate.controls.adicional.value),
          (this.customer.income = this.formCreate.controls.monthyIncome.value),
          (this.customer.currency = this.formCreate.controls.currency.value),
          (this.customer.tipeOfClient = this.selectedCheck);

        this.serviceCreate(this.customer);
       
      }
    });
  }

  serviceCreate(customer: CreateCustomer) {
    var responsePost = this.customerService.postCustomer(this.customer); 
    try {
       this.idCustomerCreated = responsePost.subscribe(
          res => {
            console.log("idCustomer: " + res);
            this.router.navigateByUrl("/visualization", {state: {idCustomer: res.data.idCustomer}});
          }
        )
    } catch (error) {
      console.log("error create")
      const dialogRef = this.dialog.open(PopupConfirmacionComponent, {
        width: "300px",
        data: {
          title: "Information",
          message: "Try again",         
          msgBtnYes: "Ok",
          option: 0,
        },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        console.log("The dialog was closed");
        console.log(result);
      });
    }
        //this.customer = res.data;   

       
      }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupConfirmacionComponent, {
      width: "300px",
      data: {
        title: "Create Customer",
        message: "¿Are you sure?",
        msgBtnNo: "No",
        msgBtnYes: "Yes",
        option: 0,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      console.log(result);
    });
  }
}
