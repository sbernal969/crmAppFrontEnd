import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateCustomerComponent } from "./components/customers/create-customer/create-customer.component";
import { ListCustomerComponent } from "./components/customers/list-customer/list-customer.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { LoginPageComponent } from "./components/login/login-page/login-page.component";
import { PreventLoggedInAccess } from "./components/login/prevent-logged-in-access";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { Routing } from "./app.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import { PopupConfirmacionComponent } from './components/utils/popup-confirmacion/popup-confirmacion.component';
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatDividerModule} from '@angular/material/divider';
import { LoginHelpComponent } from "./components/login/login-help/login-help.component";
import { VisualizationComponent } from "./components/visualization/visualization.component";
import { CustomersListResultsComponent } from "./components/customers/customers-list-results/customers-list-results.component";
import { SearchCustomerProspectComponent } from './components/customers/search-customer-prospect/search-customer-prospect.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ListCustomerComponent,
    LoginHelpComponent,
    CreateCustomerComponent,
    ForgotPasswordComponent,
    VisualizationComponent,
    PopupConfirmacionComponent,
    CustomersListResultsComponent,
    
    SearchCustomerProspectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    Routing,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMomentDateModule,
    MatDividerModule,
    MatButtonModule,

    
  ],
  providers: [PreventLoggedInAccess, MatDatepickerModule, MatNativeDateModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}
