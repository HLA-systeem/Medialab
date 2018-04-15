import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ROUTER } from '../routes';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BadgeSelectComponent } from './badge-select-screen/badge-select-screen.component';
import { BadgeDetailComponent } from './badge-detail-screen/badge-detail-screen.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { BadgeclassService } from './services/badgeclass.service';
import { AssertionService } from './services/assertion.service';
import { IssuerService } from './services/issuer.service';
import { WorkshopsComponent } from './workshops/workshops.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index-screen/index/index.component';
import { AboutComponent } from './index-screen/about/about.component';
import { TutorialComponent } from './index-screen/tutorial/tutorial.component';
import { LoginComponent } from './users/login/login.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { BadgeUploadScreenComponent } from './badge-upload-screen/badge-upload-screen.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './users/register/register.component';
import { UploadService } from './services/upload.service';
import { DrawerComponent } from './drawer/drawer.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeSelectComponent,
    MenuComponent,
    WorkshopsComponent,
    IndexComponent,
    AboutComponent,
    TutorialComponent,
    BadgeDetailComponent,
    WorkshopDetailComponent,
    LoginComponent,
    BadgeUploadScreenComponent,
    ProfileComponent,
    NavbarComponent,
    RegisterComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [AuthService, AuthGuard, BadgeclassService, AssertionService, IssuerService, CookieService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }