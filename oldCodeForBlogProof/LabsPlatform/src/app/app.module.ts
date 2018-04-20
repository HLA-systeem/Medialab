import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { BadgeSelectComponent } from './badge-select-screen/badge-select-screen.component';
import { BadgeclassService } from './services/badgeclass.service';
import { AssertionService } from './services/assertion.service';
import { IssuerService } from './services/issuer.service';
import { ROUTER } from '../routes';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeSelectComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [BadgeclassService,AssertionService,IssuerService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
