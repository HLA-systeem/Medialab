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
import {WorkshopsComponent} from './workshops/workshops.component';
import {MenuComponent} from './menu/menu.component';
import { IndexComponent } from './index-screen/index/index.component';
import { AboutComponent } from './index-screen/about/about.component';
import { TutorialComponent } from './index-screen/tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeSelectComponent,
    HeaderTopComponent,
    MenuComponent,
    WorkshopsComponent,
    IndexComponent,
    AboutComponent,
    TutorialComponent
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
