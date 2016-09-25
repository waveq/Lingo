import {Component, OnInit} from '@angular/core';

import { IAd } from './ad';
import { AdService } from "./ad.service";
import {Observable} from "rxjs";

@Component({
    templateUrl: 'app/userAds/ad-list.component.html',
})
export class AdListComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    ads: Observable<IAd[]>;
    // ads: IAd[];
    model = 1;


    constructor(private _adService: AdService) {

    }

    ngOnInit(): void {
      // console.log("oninit");
      this.getAds();
      // this._adService.getAds()
      //   .subscribe(
      //     ads => this.ads = ads,
      //     error =>  this.errorMessage = <any>error);
    }

    getAds() {
      this.ads = this._adService.getAds();
    }
}
