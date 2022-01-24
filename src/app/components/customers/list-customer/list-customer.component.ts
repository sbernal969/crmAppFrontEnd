import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'familyName', 'dateOfBirth', 'countryOfBirth', 'nationality', 'gender', 'emailAddress', 'mobileNumber', 'fixTelephoneNumber', 'postalAddress', 'monthlyIncome', 'isCustomer'];
  datos = [
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'},
    {id: '123', firstName: 'dsfsdf', familyName: 'sdfdsf', dateOfBirth: 'sfddsfs', countryOfBirth: 'dsfdsfdsf', nationality: 'gfhfghd', gender: 'dfsdgdfgs', emailAddress: 'gfhdfs', mobileNumber: 'dgesfsdf', fixTelephoneNumber: 'sdgfhgsdfs', postalAddress: 'gfhdsfsf', monthlyIncome: 'gfhgdfsd', isCustomer: 'gfhbsdfs'}
  ]
  dataSource = new MatTableDataSource<any>(this.datos);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  superUser: number = 1;
  currentUser: any = "";

  constructor() { }

  ngOnInit(): void {
    if(this.superUser == 1){
      this.displayedColumns = ['id', 'firstName', 'familyName', 'dateOfBirth', 'gender', 'emailAddress', 'mobileNumber', 'fixTelephoneNumber', 'postalAddress', 'isCustomer'];
    }

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.superUser = this.currentUser.typeRol;
    //console.log(this.currentUser);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
