/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 *
 * Public API Surface of ngx-oauth2-oidc
 */

import { TestBed } from "@angular/core/testing";

import { OAUTH2_CONFIG_TOKEN, Oauth2Service } from "./oauth2.service";
import { provideOAuth2 } from "../public-api";

describe("Oauth2Service", () => {
    let service: Oauth2Service;

    it("should be created", () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                provideOAuth2({
                    options: {},
                    metadata: {},
                }),
            ],
        });
        service = TestBed.inject(Oauth2Service);

        expect(service).toBeTruthy();
    });

    it("should default to empty config when token is null", () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                Oauth2Service,
                { provide: OAUTH2_CONFIG_TOKEN, useValue: null },
            ],
        });
        const service = TestBed.inject(Oauth2Service);
        expect(service).toBeTruthy();
    });
});
