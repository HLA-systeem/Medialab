import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {MenuTopComponent} from "./menu-top/menu-top.component";
import {RouterModule} from "@angular/router";
import {ROUTER} from "../routes";
import {BadgesComponent} from "./badges/badges.component";
import {CheckinComponent} from "./checkin/checkin.component";


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    CheckinComponent,
    ConfirmDialogComponent,
    HomepageComponent,
    MenuTopComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTER)
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
