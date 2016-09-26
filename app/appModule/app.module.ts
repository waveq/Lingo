import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { WelcomeComponent} from '../home/welcome.component';
import { AboutComponent } from "../about/about.component";

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }  from '../appComponent/app.component';
import { AdListComponent } from "../userAds/ad-list.component";
import { AdService } from "../userAds/ad.service";
import { HttpModule } from "@angular/http";
import { NotExistComponent } from "../notExist/not-exist.component";

@NgModule({
  imports:      [ BrowserModule, Ng2BootstrapModule, routing, HttpModule ],
  declarations: [ AppComponent, WelcomeComponent, AboutComponent, AdListComponent, NotExistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders, AdService
  ]
})
export class AppModule { }
