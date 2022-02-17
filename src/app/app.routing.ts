import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { CreateCustomerComponent } from "./components/customers/create-customer/create-customer.component";
import { LoginPageComponent } from "./components/login/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { PreventLoggedInAccess } from "./components/login/prevent-logged-in-access";
import { VisualizationComponent } from "./components/visualization/visualization.component";
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';

const appRoutes: Routes = [
  { path: "login", component: LoginPageComponent },

  {
    path: "create-customer",
    component: CreateCustomerComponent,
    canActivate: [PreventLoggedInAccess],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "list-customer",
    component: ListCustomerComponent
  },
  {
    path: "homepage",
    component: HomepageComponent,
    canActivate: [PreventLoggedInAccess],
  },
  {
    path: "visualization",
    component: VisualizationComponent,
    canActivate: [PreventLoggedInAccess],
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" },
];

export const Routing = RouterModule.forRoot(appRoutes, {
  relativeLinkResolution: "legacy",
});
