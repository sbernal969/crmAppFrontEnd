import { Data, LoginResponse } from './../interface/login.interface';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginResponse: LoginResponse = <LoginResponse>{};
  public listarTablaUsuario: Data = <Data>{};
  dataSubscription: Subscription = new Subscription();

  dataArreglo: any;
  public loginForm: {
    user: {
      val: string;
      error: string;
      isValid: () => boolean;
    };

    password: {
      val: string;
      error: string;
      isValid: () => boolean;
    };
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = {
      user: {
        val: '',
        error: 'User required',
        isValid() {
          var valid = true;

          if (this.val === '') {
            this.error = 'User required';
            valid = false;
          }

          return valid;
        },
      },

      password: {
        val: '',
        error: 'User required',
        isValid() {
          var valid = true;

          if (this.val === '') {
            this.error = 'Password required';

            valid = false;
          }

          return valid;
        },
      },
    };
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  btnLogin() {
    if (this.loginForm.user.val == '') {
      this.toastr.success('User required');
    }
    if (this.loginForm.password.val == '') {
      this.toastr.success('Password required');
    }

    this.getCredenciales();
  }
  getCredenciales() {
    this.dataSubscription = this.loginService
      .getJSON(this.loginForm.user.val, this.loginForm.password.val)
      .subscribe((res) => {
        if (this.loginResponse == undefined) {
          console.log('Objeto Vacio');
        } else {
          this.loginResponse = res;
          this.validar();
        }
      });
  }

  validar() {
    if (this.loginResponse.data.access == false) {
      this.toastr.error(this.loginResponse.data.message);
      this.loginForm.user.val = '';
      this.loginForm.password.val = '';
    } else {
      this.navegarAFormulario();
      this.toastr.success(this.loginResponse.data.message);
    }
  }

  navegarAFormulario() {
  this.router.navigate(
    ['/homepage/',{id: this.loginResponse.data.name +" "+  this.loginResponse.data.lastname}]
  );
  }

  get isValidForm() {
    return this.loginForm.user.isValid() && this.loginForm.password.isValid();
  }
}
