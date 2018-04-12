import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ROUTER } from '../routes';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BadgeSelectComponent } from './badge-select-screen/badge-select-screen.component';
import { BadgeDetailComponent } from './badge-detail-screen/badge-detail-screen.component';
import { BadgeclassService } from './services/badgeclass.service';
import { AssertionService } from './services/assertion.service';
import { IssuerService } from './services/issuer.service';
import {HeaderTopComponent} from "./header/header-top.component";
import {WorkshopsComponent} from './workshops/workshops.component';
import {MenuComponent} from './menu/menu.component';
import { IndexComponent } from './index-screen/index/index.component';
import { AboutComponent } from './index-screen/about/about.component';
import { TutorialComponent } from './index-screen/tutorial/tutorial.component';
<<<<<<< HEAD:front-end/LabsPlatform/src/app/app.module.ts
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail-component';
=======
import { LoginComponent } from './users/login/login.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
>>>>>>> origin/master:LabsPlatform/src/app/app.module.ts


@NgModule({
  declarations: [
    AppComponent,
    BadgeSelectComponent,
    HeaderTopComponent,
    MenuComponent,
    WorkshopsComponent,
    IndexComponent,
    AboutComponent,
    TutorialComponent,
    BadgeDetailComponent,
    WorkshopDetailComponent,
<<<<<<< HEAD:front-end/LabsPlatform/src/app/app.module.ts
=======
    LoginComponent
>>>>>>> origin/master:LabsPlatform/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [BadgeclassService, AssertionService, IssuerService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }