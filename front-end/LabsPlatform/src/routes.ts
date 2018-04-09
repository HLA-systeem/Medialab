import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./app/index-screen/index/index.component";
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import { WorkshopsComponent } from './app/workshops/workshops.component';

export const ROUTER:Routes = [
    {path:"index", component: IndexComponent, data: {depth: 1}},
    {path:"badgeSelect", component: BadgeSelectComponent, data: {depth: 2}},
    {path:"workshops", component: WorkshopsComponent, pathMatch:"full"},
    {path:"", redirectTo: "/index", pathMatch:"full"}
]