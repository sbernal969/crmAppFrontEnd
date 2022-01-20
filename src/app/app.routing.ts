import { LoginPageComponent } from './components/login/login-page/login-page.component';
//import { PruebasNavComponent } from './login/pruebas-nav/pruebas-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
