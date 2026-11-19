/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 *
 * Public API Surface of ngx-oauth2-oidc
 */

import { makeEnvironmentProviders, EnvironmentProviders } from "@angular/core";
import { IOAuth2Config } from "../domain";
import { OAUTH2_CONFIG_TOKEN, Oauth2Service } from "./oauth2.service";

export const provideOAuth2 = (
    config: IOAuth2Config | null = null,
): EnvironmentProviders =>
    makeEnvironmentProviders([
        Oauth2Service,
        { provide: OAUTH2_CONFIG_TOKEN, useValue: config },
    ]);
