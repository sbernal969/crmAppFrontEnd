import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  //public loginResponse: LoginResponse = <LoginResponse>{};
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
    //private loginService: LoginService,
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
  }

  btnBackLogin() {
    this.router.navigate(["/login/"]);
  }

  get isValidForm() {
    return this.loginForm.user.isValid();
  }
}
