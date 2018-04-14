import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material.module';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {MenuTopComponent} from "./menu-top/menu-top.component";
import { BadgeclassService } from './services/badgeclass.service';
import {RouterModule} from "@angular/router";
import {ROUTER} from "../routes";
import {BadgesComponent} from "./badges/badges.component";
import {CheckinComponent} from "./checkin/checkin.component";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {WorkshopsComponent} from "./workshops/workshops.component";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    CheckinComponent,
    ConfirmDialogComponent,
    HomepageComponent,
    MenuTopComponent,
    WorkshopsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    RouterModule.forRoot(ROUTER)
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  providers: [BadgeclassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
