import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { BadgeSelectComponent } from './badge-select-screen/badge-select-screen.component';
import { BadgeclassService } from './services/badgeclass.service';
import { AssertionService } from './services/assertion.service';
import { IssuerService } from './services/issuer.service';
import { ROUTER } from '../routes';
import {HeaderTopComponent} from "./header/header-top.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {AccountComponent} from "./main-content/account/account.component";
import {MyBadgesComponent} from "./main-content/mybadges/mybadges.component";
import {MyAccountComponent} from "./main-content/account/myaccount/myaccount.component";


@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    BadgeSelectComponent,
    HeaderTopComponent,
    MainContentComponent,
    MyAccountComponent,
    MyBadgesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [BadgeclassService, AssertionService, IssuerService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
