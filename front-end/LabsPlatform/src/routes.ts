import { RouterModule, Routes } from '@angular/router';
import { BadgeSelectComponent } from "./app/badge-select-screen/badge-select-screen.component";
import { MainContentComponent } from "./app/main-content/main-content.component";


export const ROUTER:Routes = [
    {path:"main", component: MainContentComponent, data: {depth: 1}},
    {path:"badgeSelect", component: BadgeSelectComponent, data: {depth: 2}},
    {path:"", redirectTo: "/main", pathMatch:"full"}
]