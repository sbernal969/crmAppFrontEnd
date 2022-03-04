import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirmacion',
  templateUrl: './popup-confirmacion.component.html',
  styleUrls: ['./popup-confirmacion.component.css']
})
export class PopupConfirmacionComponent implements OnInit {

  optionNo: number = 0;
  optionYes: number = 1;
  hiddenBtn: false;

  constructor(public dialogRef: MatDialogRef<PopupConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
