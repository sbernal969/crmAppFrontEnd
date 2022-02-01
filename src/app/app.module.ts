import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./components/login/login-page/login-page.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { Routing } from "./app.routing";
import { CreateCustomerComponent } from "./components/customers/create-customer/create-customer.component";
import { ListCustomerComponent } from "./components/customers/list-customer/list-customer.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from "@angular/material/paginator";
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { PreventLoggedInAccess } from './components/login/prevent-logged-in-access';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    Routing,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FlexLayoutModule
    
  ],
  providers: [PreventLoggedInAccess],
  bootstrap: [AppComponent]
})
export class AppModule {}
