/**
 * Copyright (c) 2026 Manuel García Criado
 * SPDX-License-Identifier: MIT
 */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxOauth2OidcComponent } from "./ngx-oauth2-oidc.component";

describe("NgxOauth2OidcComponent", () => {
    let component: NgxOauth2OidcComponent;
    let fixture: ComponentFixture<NgxOauth2OidcComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxOauth2OidcComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgxOauth2OidcComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
