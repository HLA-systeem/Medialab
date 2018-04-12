import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./app/hompage/homepage.component";
import {CheckinComponent} from "./app/checkin/checkin.component";
import {BadgesComponent} from "./app/badges/badges.component";

export const ROUTER:Routes = [
  {path:"index", component: HomepageComponent, pathMatch:"full"},
  {path:"badges", component: BadgesComponent, pathMatch:"full"},
  {path:"checkin", component: CheckinComponent, pathMatch:"full"},
  {path:"", redirectTo: "/index", pathMatch:"full"}
]
