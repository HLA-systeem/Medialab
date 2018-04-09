import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderTopComponent} from "./header/header-top.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {AccountComponent} from "./main-content/account/account.component";
import {MyBadgesComponent} from "./main-content/mybadges/mybadges.component";
import {MyAccountComponent} from "./main-content/account/myaccount/myaccount.component";


@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    HeaderTopComponent,
    MainContentComponent,
    MyAccountComponent,
    MyBadgesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
