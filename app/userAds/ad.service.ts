import { IAd } from "./ad";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AdService {
    private _adUrl = 'api/people/userAds.json';

    constructor(private _http: Http) { }

    getAds(): Observable<IAd[]> {
        return this._http.get(this._adUrl)
            .map((response: Response) => <IAd[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAd(id: number): Observable<IAd> {
        return this.getAds()
            .map((ads: IAd[]) => ads.find(ad => ad.id === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
