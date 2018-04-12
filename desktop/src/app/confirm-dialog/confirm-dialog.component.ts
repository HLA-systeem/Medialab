import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HomepageComponent} from "../homepage/homepage.component";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
    selector: '',
    templateUrl: 'confirm-dialog.component.html',
    styleUrls: ['confirm-dialog.component.css']
})

export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<HomepageComponent>){

  }

  closeDialog(): void{
    this.dialogRef.close();
  }
}
