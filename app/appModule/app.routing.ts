import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "../home/welcome.component";
import { AboutComponent } from "../about/about.component";
import {AdListComponent} from "../userAds/ad-list.component";
import {NotExistComponent} from "../notExist/not-exist.component";

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'people', component: AdListComponent },
  { path: 'people', component: AdListComponent },
  { path: '', component: WelcomeComponent},
  { path: '**', component: NotExistComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
