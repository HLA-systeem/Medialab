import { RouterModule, Routes } from '@angular/router';
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";


export const ROUTER:Routes = [
    {path:"badgeSelect", component: BadgeSelectComponent, data: {depth: 1}},
    {path:"", redirectTo: "/badgeSelect", pathMatch:"full"}
]