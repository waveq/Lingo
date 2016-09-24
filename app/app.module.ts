import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { WelcomeComponent} from './home/welcome.component';
import { NotWelcomeComponent } from "./home/not-welcome.component";

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }  from './app.component';
import { AdListComponent } from "./userAds/ad-list.component";
import { AdService } from "./userAds/ad.service";
import { HttpModule } from "@angular/http";
import {AdResolveService} from "./userAds/ad-resolve-service";

@NgModule({
  imports:      [ BrowserModule, Ng2BootstrapModule, routing, HttpModule ],
  declarations: [ AppComponent, WelcomeComponent, NotWelcomeComponent, AdListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders, AdService
  ]
})
export class AppModule { }
