import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {HomepageComponent} from "./hompage/homepage.component";
import {CheckinComponent} from "./checkin/checkin.component";
import {MenuTopComponent} from "./menu-top/menu-top.component";
import {RouterModule} from "@angular/router";
import {ROUTER} from "../routes";
import {BadgesComponent} from "./badges/badges.component";


@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    CheckinComponent,
    HomepageComponent,
    MenuTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
