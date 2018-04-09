import { RouterModule, Routes } from '@angular/router';
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import { MainContentComponent } from "./app/main-content/main-content.component";
import {HomePageComponent} from './app/homepage/homepage.component';
import {WorkshopsComponent} from './app/workshops/workshops.component';

export const ROUTER:Routes = [
    {path:"index", component: MainContentComponent, data: {depth: 1}},
    {path:"badgeSelect", component: BadgeSelectComponent, data: {depth: 2}},
    {path:"workshops", component: WorkshopsComponent, pathMatch:"full"},
    {path:"", redirectTo: "/main", pathMatch:"full"}
]