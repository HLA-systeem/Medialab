import { RouterModule, Routes } from '@angular/router';
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import { BadgeDetailComponent } from "./app/badge-detail-screen/badge-detail-screen.component";

import { LoginComponent } from "./app/users/login/login.component";
import { RegisterComponent } from "./app/users/register/register.component";
import { ProfileComponent } from "./app/users/profile/profile.component";
import { FeedComponent } from "./app/users/feed/feed.component";
import { AuthGuard } from './app/services/auth.guard';
import { PromoWorkshopComponent } from './app/promo-workshop/promo-workshop.component';

export const ROUTER:Routes = [
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
    {path:"feed", component: FeedComponent, canActivate: [AuthGuard]},
    {path:"profile", component: ProfileComponent, canActivate: [AuthGuard]},
    {path:"badgeSelect/:idCol", component: BadgeDetailComponent, canActivate: [AuthGuard]},
    {path:"badgeSelect", component: BadgeSelectComponent, canActivate: [AuthGuard]},
    {path:"workshops", component: PromoWorkshopComponent, canActivate: [AuthGuard]},
    {path:"", redirectTo: "/login", pathMatch:"full"}
]
