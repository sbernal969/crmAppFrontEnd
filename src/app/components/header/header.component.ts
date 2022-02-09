import { Component, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;
  name: string = '';
  currentUser: any;
  subscription?: Subscription;

  constructor(private loginService: LoginService) { 
  }

  ngOnInit(): void {
    this.subscription = this.loginService.isAuth$.subscribe(
      result => {
        this.isAuth = result;
        this.currentUser = JSON.parse(this.loginService.getUser() || '{}');
        this.name = this.currentUser.name + ' ' + this.currentUser.lastname;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout(){
    this.loginService.logOut();
  }

}
