import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.css"],
})
export class ListCustomerComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "firstName",
    "familyName",
    "dateOfBirth",
    "countryOfBirth",
    "nationality",
    "gender",
    "emailAddress",
    "mobileNumber",
    "fixTelephoneNumber",
    "postalAddress",
    "monthlyIncome",
    "isCustomer",
    "acciones",
  ];
  datos = [
    {
      id: "5683523",
      firstName: "Cliente",
      familyName: "Nuevo",
      dateOfBirth: "01/01/1980",
      countryOfBirth: "Chile",
      nationality: "Chileno",
      gender: "Masculino",
      emailAddress: "correo@gmail.com",
      mobileNumber: "5691234567",
      fixTelephoneNumber: "5629876543",
      postalAddress: "8092378",
      monthlyIncome: "$1.000.000",
      isCustomer: "Customer",
    },
  ];
  dataSource = new MatTableDataSource<any>(this.datos);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  rolUser: number = 1;
  currentUser: any = "";

  constructor() {}

  ngOnInit(): void {
    if (this.rolUser == 1) {
      this.displayedColumns = [
        "id",
        "firstName",
        "familyName",
        "dateOfBirth",
        "gender",
        "emailAddress",
        "mobileNumber",
        "fixTelephoneNumber",
        "postalAddress",
        "isCustomer",
        "acciones",
      ];
    }

    this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    this.rolUser = this.currentUser.typeRol;
    //console.log(this.currentUser);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
