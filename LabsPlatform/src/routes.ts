import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./app/index-screen/index/index.component";
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import { BadgeDetailComponent } from "./app/badge-detail-screen/badge-detail-screen.component";
import { WorkshopsComponent } from './app/workshops/workshops.component';
import { WorkshopDetailComponent} from "./app/workshop-detail/workshop-detail.component";
import { LoginComponent } from "./app/users/login/login.component";
import { ProfileComponent } from "./app/users/profile/profile.component";

export const ROUTER:Routes = [
    {path:"login", component: LoginComponent},
    {path:"index", component: IndexComponent},
    {path:"profile", component: ProfileComponent},
    {path:"badgeSelect/:idCol", component: BadgeDetailComponent},
    {path:"badgeSelect", component: BadgeSelectComponent},
    {path:"workshops", component: WorkshopsComponent},
    {path:"workshopDetail", component: WorkshopDetailComponent},
    {path:"", redirectTo: "/login", pathMatch:"full"}
]
