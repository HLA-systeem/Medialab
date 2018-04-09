import { RouterModule, Routes } from '@angular/router';
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import {HomePageComponent} from './app/homepage/homepage.component';
import {WorkshopsComponent} from './app/workshops/workshops.component';


export const ROUTER:Routes = [
    {path:"", component: HomePageComponent, data: {depth: 1}},
    {path:"workshops", component: WorkshopsComponent, pathMatch:"full"},
    // {path:"", redirectTo: "/badgeSelect", pathMatch:"full"}
]
