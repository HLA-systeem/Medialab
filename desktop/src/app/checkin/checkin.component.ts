import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'checkin',
    templateUrl: 'checkin.component.html',
    styleUrls: ['checkin.component.css']
})

export class CheckinComponent {
  exampleCode = 'GH0123';
  formCheckCode:FormGroup;
  error = false;

  constructor(public dialog: MatDialog,private fb: FormBuilder){
    this.formCheckCode = fb.group({
      'checkinCode': [null, Validators.required],
    });
  }

  addPost(post):void {
    if(post.checkinCode !== this.exampleCode){
      this.error = true;
    }
    else{
      this.error = false;
      this.openDialog();
    }
  }

  openDialog():void{
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "310px",
    });

    dialogRef.afterClosed().subscribe(result => {

    })
  }
}
