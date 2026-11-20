import { TestBed } from "@angular/core/testing";
import {
    provideOAuth2,
    Oauth2Service,
    OAUTH2_CONFIG_TOKEN,
} from "ngx-oauth2-oidc";

describe("provideOAuth2", () => {
    it("should provide Oauth2Service", () => {
        TestBed.configureTestingModule({
            providers: [provideOAuth2()],
        });

        expect(TestBed.inject(Oauth2Service)).toBeTruthy();
    });

    it("should provide OAUTH2_CONFIG_TOKEN with the given config", () => {
        const config = {
            options: {},
            metadata: {},
        };

        TestBed.configureTestingModule({
            providers: [provideOAuth2(config)],
        });

        expect(TestBed.inject(OAUTH2_CONFIG_TOKEN)).toEqual(config);
    });

    it("should provide OAUTH2_CONFIG_TOKEN as null when no config is passed", () => {
        TestBed.configureTestingModule({
            providers: [provideOAuth2()],
        });

        expect(TestBed.inject(OAUTH2_CONFIG_TOKEN)).toBeNull();
    });

    it("should use null as default when undefined is passed", () => {
        TestBed.configureTestingModule({
            providers: [provideOAuth2(undefined)],
        });

        expect(TestBed.inject(OAUTH2_CONFIG_TOKEN)).toBeNull();
    });
});
