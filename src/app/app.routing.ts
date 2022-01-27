import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
