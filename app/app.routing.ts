import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./home/welcome.component";
import { AboutComponent } from "./home/about.component";
import {AdListComponent} from "./userAds/ad-list.component";

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'people', component: AdListComponent },
  { path: '', component: WelcomeComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
