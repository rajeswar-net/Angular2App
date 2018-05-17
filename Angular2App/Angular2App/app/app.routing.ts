import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./Components/user.component";
import { HomeComponent } from "./Components/home.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);