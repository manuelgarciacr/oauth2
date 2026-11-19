/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 *
 * Public API Surface of ngx-oauth2-oidc
 */

import { TestBed } from "@angular/core/testing";

import { Oauth2Service } from "./oauth2.service";

describe("Oauth2Service", () => {
    let service: Oauth2Service;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Oauth2Service);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
