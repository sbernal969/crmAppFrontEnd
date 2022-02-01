import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { CreateCustomerComponent } from "./components/customers/create-customer/create-customer.component";
import { LoginPageComponent } from "./components/login/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { PreventLoggedInAccess } from "./components/login/prevent-logged-in-access";

const appRoutes: Routes = [
  { path: "login", component: LoginPageComponent },

  {
    path: "create-customer",
    component: CreateCustomerComponent,
    canActivate: [PreventLoggedInAccess],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [PreventLoggedInAccess]   
  },
  {
    path: "homepage",
    component: HomepageComponent,
    canActivate: [PreventLoggedInAccess],
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" },
];

export const Routing = RouterModule.forRoot(appRoutes, {
  relativeLinkResolution: "legacy",
});
