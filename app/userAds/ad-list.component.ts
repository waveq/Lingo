import {Component, OnInit} from '@angular/core';

import { IAd } from './ad';
import { AdService } from "./ad.service";

@Component({
    templateUrl: 'app/userAds/ad-list.component.html',
})
export class AdListComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    ads: IAd[];
    model = 1;


    constructor(private _adService: AdService) {

    }

    ngOnInit(): void {
      this._adService.getAds()
                     .subscribe(
                       ads => this.ads = ads,
                       error =>  this.errorMessage = <any>error);
    }
    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Current Ads: ' + message;
    // }
}
