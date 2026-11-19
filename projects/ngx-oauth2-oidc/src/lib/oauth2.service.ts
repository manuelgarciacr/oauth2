/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 *
 * Public API Surface of ngx-oauth2-oidc
 */

import { Inject, Injectable, InjectionToken } from "@angular/core";
import { IOAuth2Config } from "../domain";

export const OAUTH2_CONFIG_TOKEN = new InjectionToken<IOAuth2Config>(
    "OAuth2 Config",
);

@Injectable({
    providedIn: "root",
})
export class Oauth2Service {
    private _config: IOAuth2Config = {};

    constructor(
        @Inject(OAUTH2_CONFIG_TOKEN) protected oauth2Config?: IOAuth2Config,
    ) {
        this.setConfig(oauth2Config ?? {});
    }

    setConfig = (oauth2Config: IOAuth2Config) => {
        this._config = oauth2Config;
    };
}
