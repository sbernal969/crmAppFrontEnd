import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { LoginHelpComponent } from './components/login/login-help/login-help.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { PreventLoggedInAccess } from './components/login/prevent-logged-in-access';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { Routing } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupConfirmacionComponent } from './components/utils/popup-confirmacion/popup-confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent, FooterComponent, HomepageComponent, ListCustomerComponent, LoginHelpComponent,
    CreateCustomerComponent,
    ForgotPasswordComponent,
    PopupConfirmacionComponent,
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
    MatDialogModule, NgbModule
  ],
  providers: [PreventLoggedInAccess],
  bootstrap: [AppComponent]
})
export class AppModule { }
