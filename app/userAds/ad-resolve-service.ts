import { Injectable }             from '@angular/core';
import {Router, Resolve,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import {AdListComponent} from "./ad-list.component";
import {AdService} from "./ad.service";
import {IAd} from "./ad";
import {Observable} from "rxjs";


@Injectable()
export class AdResolveService implements Resolve<IAd> {

  constructor(
    private service: AdService
  ) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdLis> {
  //   const id = +route.params['id'];
  //   return Observable.fromPromise(this.service.getAd(id));
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAd>|Promise<any>|any {

    // this._adService.getAds()
    //                .subscribe(
    //                  ads => this.ads = ads,
    //                  error =>  this.errorMessage = <any>error);
    // return Observable.fromPromise()
  }
}
