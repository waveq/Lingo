import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { WelcomeComponent} from './home/welcome.component';
import { AboutComponent } from "./home/about.component";

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }  from './app.component';
import { AdListComponent } from "./userAds/ad-list.component";
import { AdService } from "./userAds/ad.service";
import { HttpModule } from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, Ng2BootstrapModule, routing, HttpModule ],
  declarations: [ AppComponent, WelcomeComponent, AboutComponent, AdListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders, AdService
  ]
})
export class AppModule { }
