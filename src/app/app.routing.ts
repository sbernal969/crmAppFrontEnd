import { LoginPageComponent } from './login/login-page/login-page.component';
//import { PruebasNavComponent } from './login/pruebas-nav/pruebas-nav.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

  { path: 'login', component: LoginPageComponent },
  //{ path: 'pruebaNav', component: PruebasNavComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: '**', redirectTo: '/home'}
];






export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
