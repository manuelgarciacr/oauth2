import { Inject, Injectable, InjectionToken } from '@angular/core';
import { IOAuth2Data } from '../domain';

export const OAUTH2_DATA_TOKEN = new InjectionToken<IOAuth2Data>(
    "OAuth2 Data",
);

@Injectable({
    providedIn: "root",
})
export class Oauth2Service {
    private _data: IOAuth2Data = {};

    constructor(
        @Inject(OAUTH2_DATA_TOKEN) protected oauth2Data?: IOAuth2Data
    ) {
        this.setData(oauth2Data ?? {})
    }

    setData = (oauth2Data: IOAuth2Data) => {
        this._data = oauth2Data;
    }
}
