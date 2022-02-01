import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-help',
  templateUrl: './login-help.component.html',
  styleUrls: ['./login-help.component.css']
})
export class LoginHelpComponent implements OnInit {
  dialog: any;

  constructor(public dialogRef: MatDialogRef<LoginHelpComponent>) { }

  ngOnInit(): void {
  }

}
