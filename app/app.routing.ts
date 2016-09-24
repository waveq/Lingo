import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./home/welcome.component";
import { NotWelcomeComponent } from "./home/not-welcome.component";
import {AdListComponent} from "./userAds/ad-list.component";
import {AdResolveService} from "./userAds/ad-resolve-service";

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'people', component: AdListComponent },
  { path: '', component: NotWelcomeComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
