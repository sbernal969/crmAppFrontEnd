import { Data } from "./../../../models/interface/data.interface";
import { ForgotResponse } from "./../../../models/interface/forgot.interface";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  //Declaracion de variables
  public forgotResponse: ForgotResponse = <ForgotResponse>{};
  dataSubscription: Subscription = new Subscription();

  ngOnInit(): void {}

  public loginForm: {
    user: {
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
        val: "",
        error: "",
        isValid() {
          var valid = true;

          if (this.val === "") {
            this.error = "* User required";
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

  btnForgot() {
    if (this.loginForm.user.val == "") {
      this.toastr.success("User required");
    }
    this.getForgot();
  }

  btnBackLogin() {
    this.router.navigate(["/login/"]);
  }
  //
  get isValidForm() {
    return this.loginForm.user.isValid();
  }
  //Metodo que llama al servicio
  getForgot() {
    console.log(this.loginForm.user.val);
    this.dataSubscription = this.loginService
      .getForgot(this.loginForm.user.val)
      .subscribe((res) => {
        if (this.forgotResponse == undefined) {
          console.log("Objeto Vacio");
        } else {
          this.forgotResponse = res;
          this.validar();
        }
      });
  }

  
  validar() {    
    if (this.forgotResponse.data.email == null) {
      this.toastr.error(this.forgotResponse.data.message);
      this.loginForm.user.val = "";
    } else {
      this.toastr.success(this.forgotResponse.data.message);
      this.loginService.login(JSON.stringify(this.forgotResponse.data));
    }
  }
}
