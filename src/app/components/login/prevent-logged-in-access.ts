import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Injectable()
export class PreventLoggedInAccess implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isAuthenticated();
  }
} 